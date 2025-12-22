// Quick test to verify the study database integration
const { SUPPLEMENT_STUDIES } = require('./src/lib/content/researchSources.ts');
const { getStudiesForIngredient, getStudiesForProduct } = require('./src/lib/utils/studyHelpers.ts');

// Test vitamin D studies
console.log('Vitamin D studies:', getStudiesForIngredient('vitamin d').length);
console.log('Omega-3 studies:', getStudiesForIngredient('omega-3 fatty acids').length);
console.log('Probiotics studies:', getStudiesForIngredient('probiotics').length);
console.log('Creatine studies:', getStudiesForIngredient('creatine').length);

// Test product studies
console.log('Product studies for vitamin d:', getStudiesForProduct(['vitamin d']).length);
console.log('Product studies for omega-3:', getStudiesForProduct(['omega-3']).length);

console.log('Total supplement categories:', Object.keys(SUPPLEMENT_STUDIES).length);
console.log('Total studies:', Object.values(SUPPLEMENT_STUDIES).flat().length);
