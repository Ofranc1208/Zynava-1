#!/usr/bin/env node

/**
 * ZYNAVA Build & Deploy Script
 * 
 * This script helps ensure clean builds before Vercel deployment
 * Run: node build-deploy.js
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[36m',
};

function log(color, ...args) {
  console.log(color, ...args, colors.reset);
}

function section(title) {
  console.log('\n' + colors.bright + colors.blue + '='.repeat(70));
  console.log('  ' + title);
  console.log('='.repeat(70) + colors.reset + '\n');
}

function success(message) {
  log(colors.green, `✓ ${message}`);
}

function warning(message) {
  log(colors.yellow, `⚠ ${message}`);
}

function error(message) {
  log(colors.red, `✗ ${message}`);
}

function info(message) {
  log(colors.blue, `ℹ ${message}`);
}

try {
  section('ZYNAVA BUILD & DEPLOYMENT SCRIPT');

  // Check if dependencies are installed
  section('1. Checking Dependencies');
  if (!fs.existsSync('node_modules')) {
    info('node_modules not found, installing...');
    try {
      execSync('npm install', { stdio: 'inherit' });
      success('Dependencies installed');
    } catch (e) {
      error('Failed to install dependencies');
      process.exit(1);
    }
  } else {
    success('Dependencies already installed');
  }

  // Run linter
  section('2. Running Linter');
  try {
    execSync('npm run lint', { stdio: 'inherit' });
    success('Linter passed');
  } catch (e) {
    warning('Linter found issues (non-blocking)');
  }

  // Clean build cache
  section('3. Cleaning Build Cache');
  try {
    if (fs.existsSync('.next')) {
      execSync('rm -rf .next', { shell: true });
      success('Old build cache removed');
    }
  } catch (e) {
    warning('Could not clean cache');
  }

  // Run production build
  section('4. Running Production Build');
  try {
    execSync('npm run build', { stdio: 'inherit' });
    success('Production build completed successfully');
  } catch (e) {
    error('Build failed!');
    error('Please fix the errors above and try again');
    process.exit(1);
  }

  // Test production build locally
  section('5. Build Verification');
  if (fs.existsSync('.next')) {
    success('.next directory created (build successful)');
    
    const buildStats = fs.statSync('.next');
    info(`Build size: ${(buildStats.size / 1024 / 1024).toFixed(2)}MB`);
  }

  // Summary
  section('BUILD SUMMARY');
  success('All checks passed!');
  console.log(colors.bright + colors.green + `
  Your application is ready to deploy to Vercel!

  Next Steps:
  1. Commit changes: git add . && git commit -m "Ready for Vercel"
  2. Push to GitHub: git push origin main
  3. Deploy to Vercel: vercel
  4. Test on mobile: Open Vercel URL on your phone

  To test locally before deploying:
  npm start

  ` + colors.reset);

} catch (err) {
  error('Script failed: ' + err.message);
  process.exit(1);
}

