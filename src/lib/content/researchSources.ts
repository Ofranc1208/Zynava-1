import { IngredientStudies } from './studyTypes'

export const SUPPLEMENT_STUDIES: IngredientStudies = {
  'magnesium': [
    {
      id: 'mg-001',
      title: 'Magnesium supplementation for sleep quality in older adults',
      url: 'https://pubmed.ncbi.nlm.nih.gov/23853635/',
      source: 'PubMed',
      type: 'clinical-trial',
      year: 2012,
      educationalNotes: ['Improved sleep efficiency by 15%', 'Reduced insomnia symptoms', 'Better sleep onset']
    },
    {
      id: 'mg-002',
      title: 'Magnesium and stress reduction: a review',
      url: 'https://pubmed.ncbi.nlm.nih.gov/16542786/',
      source: 'PubMed',
      type: 'review',
      year: 2006,
      educationalNotes: ['Supports stress adaptation', 'Reduces cortisol levels', 'Enhances relaxation']
    },
    {
      id: 'mg-003',
      title: 'Magnesium forms comparison study',
      url: 'https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/',
      source: 'NIH',
      type: 'review',
      year: 2024,
      educationalNotes: ['Glycinate form has superior absorption', 'Oxide form has poor bioavailability', 'Citrate provides digestive benefits']
    }
  ],

  'magnesium-glycinate': [
    {
      id: 'mg-gly-001',
      title: 'Bioavailability of magnesium glycinate vs oxide',
      url: 'https://pubmed.ncbi.nlm.nih.gov/17604669/',
      source: 'PubMed',
      type: 'clinical-trial',
      year: 2003,
      educationalNotes: ['400% better absorption than oxide', 'Gentler on stomach', 'Better tissue distribution']
    }
  ],

  'vitamin-d': [
    {
      id: 'vitd-001',
      title: 'Adequacy of calcium and vitamin D nutritional status in a nationally representative sample of Irish teenagers aged 13–18 years',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9598778/',
      source: 'PubMed',
      type: 'general',
      year: 2022,
      educationalNotes: ['Observational study using data from the National Teens\' Food Survey II (2019–2020).', 'Found a high prevalence of inadequate calcium (67%) and vitamin D (94%) intake in Irish teenagers.', 'Identified extended winter sampling, older age (16–18), low total vitamin D intake, and non-white skin type as predictors of vitamin D deficiency.']
    },
    {
      id: 'vitd-002',
      title: 'Vitamin D and skin disorders: bridging molecular insights to clinical innovations',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12275319/',
      source: 'PubMed',
      type: 'review',
      year: 2025,
      educationalNotes: ['A review synthesizing the immunoregulatory role of Vitamin D in skin diseases like atopic dermatitis and psoriasis.', 'Highlights that the active form, calcitriol, modulates immune homeostasis by strengthening antimicrobial defense and downregulating inflammation.', 'Suggests future clinical trials should analyze Vitamin D Receptor (VDR) polymorphisms as a predictive biomarker.']
    },
    {
      id: 'vitd-003',
      title: 'Vitamin D and Clinical Outcomes in Head and Neck Cancer: A Systematic Review',
      url: 'https://pubmed.ncbi.nlm.nih.gov/40218858/',
      source: 'PubMed',
      type: 'systematic-review',
      year: 2025,
      educationalNotes: ['A systematic review of 16 studies (2015-2025) focusing on Vitamin D\'s role in Head and Neck Cancer (HNC).', 'Found Vitamin D deficiency is highly prevalent (47% to 95%) among HNC patients, particularly in advanced stages.', 'Suggests higher Vitamin D levels are linked to better survival and fewer treatment-related side effects like mucositis.']
    },
    {
      id: 'vitd-004',
      title: 'Vitamin D and Multiple Health Outcomes: An Umbrella Review of Observational Studies, Randomized Controlled Trials, and Mendelian Randomization Studies',
      url: 'https://www.sciencedirect.com/science/article/pii/S2161831322000072',
      source: 'Other',
      type: 'meta-analysis',
      year: 2022,
      educationalNotes: ['An umbrella review combining observational studies, RCTs, and Mendelian randomization studies.', 'Found that lower Vitamin D concentrations were associated with a higher risk for all-cause mortality, Alzheimer\'s, hypertension, schizophrenia, and type 2 diabetes.', 'Concluded that Vitamin D supplementation is a promising strategy for long-term preventive effects on multiple chronic diseases.']
    },
    {
      id: 'vitd-005',
      title: 'Critical Appraisal of Large Vitamin D Randomized Controlled Trials',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8778517/',
      source: 'PubMed',
      type: 'review',
      year: 2022,
      educationalNotes: ['A critical review of large Vitamin D Randomized Controlled Trials (RCTs).', 'Notes that most large RCTs did not restrict participants to those with Vitamin D deficiency, which may have masked potential benefits.', 'Concludes that future trials should use more personalized approaches and focus on populations with Vitamin D deficiency or specific characteristics.']
    },
    {
      id: 'vd-006',
      title: 'Effects of vitamin D supplementation on musculoskeletal health: a systematic review, meta-analysis, and trial sequential analysis',
      url: 'https://www.thelancet.com/journals/landia/article/PIIS2213-8587(18)30370-X/fulltext',
      source: 'The Lancet Diabetes & Endocrinology',
      type: 'meta-analysis',
      year: 2019,
      educationalNotes: ['A systematic review and meta-analysis on vitamin D supplementation for musculoskeletal health in adults.', 'Concluded that the statistically significant effects of Vitamin D supplements on bone density were not clinically important.', 'Stated that the evidence that calcium supplementation with or without vitamin D reduces fractures is weak and inconsistent.']
    },
    {
      id: 'vd-007',
      title: 'Impact of vitamin D supplementation on disease activity and pain management in rheumatoid arthritis: a randomized double-blinded controlled study',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12247244/',
      source: 'PubMed',
      type: 'RCT',
      year: 2025,
      educationalNotes: ['A randomized double-blinded controlled study on the effect of Vitamin D (4000 IU/day) in patients with Rheumatoid Arthritis (RA).', 'Found that Vitamin D supplementation significantly improved pain reduction and disease activity (DAS28 score) after six months.', 'Suggests a potential immunomodulatory role for high-dose Vitamin D in managing RA symptoms.']
    },
    {
      id: 'vd-008',
      title: 'Effects of Supplemental Vitamin D on Bone Health Outcomes in Women and Men in the VITamin D and OmegA‐3 TriaL (VITAL)',
      url: 'https://academic.oup.com/jbmr/article/35/5/883/7516653',
      source: 'Journal of Bone and Mineral Research',
      type: 'RCT',
      year: 2020,
      educationalNotes: ['A large-scale randomized controlled trial (VITAL) on Vitamin D3 (2000 IU/day) for bone health.', 'Found that Vitamin D3 supplementation had no effect on 2-year changes in bone mineral density (aBMD) at major sites (spine, hip) in the overall population.', 'A small benefit was observed in a subgroup with very low baseline Vitamin D levels, suggesting that supplementation may only be beneficial for those who are deficient.']
    },
    {
      id: 'vd-009',
      title: 'Vitamin D supplementation to prevent acute respiratory infections: systematic review and meta-analysis of stratified aggregate data',
      url: 'https://www.sciencedirect.com/science/article/pii/S2666634024003486',
      source: 'The Lancet Diabetes & Endocrinology',
      type: 'meta-analysis',
      year: 2025,
      educationalNotes: ['An updated systematic review and meta-analysis of RCTs on Vitamin D supplementation for the prevention of acute respiratory infections (ARI).', 'Found no statistically significant protective effect of Vitamin D supplementation against ARI overall (OR 0.94 [95% CI 0.88–1.00], p=0.057).', 'Suggests that the overall evidence does not support the use of Vitamin D supplementation to prevent ARI in the general population.']
    },
    {
      id: 'vd-010',
      title: 'Efficacy of vitamin D supplementation on glycaemic control in type 2 diabetes: An updated systematic review and meta‐analysis of randomized controlled trials',
      url: 'https://dom-pubs.onlinelibrary.wiley.com/doi/full/10.1111/dom.15941',
      source: 'Diabetes, Obesity and Metabolism',
      type: 'meta-analysis',
      year: 2024,
      educationalNotes: ['An updated systematic review and meta-analysis of RCTs on Vitamin D supplementation for glycaemic control in Type 2 Diabetes (T2D).', 'Found that Vitamin D supplementation significantly reduced fasting blood glucose (FBG), HbA1c, HOMA-IR, and fasting insulin levels in T2D patients.', 'The effects were most prominent when Vitamin D was given in a short-term, high dosage to patients with a Vitamin D deficiency, who were overweight, or had an HbA1c of 8% or higher at baseline.']
    }
  ],

  'vitamin-d3': [
    {
      id: 'vd3-001',
      title: 'Vitamin D and immune function',
      url: 'https://ods.od.nih.gov/factsheets/VitaminD-HealthProfessional/',
      source: 'NIH',
      type: 'review',
      year: 2024,
      educationalNotes: ['Essential for immune response', 'Supports T-cell function', 'Reduces infection risk']
    },
    {
      id: 'vd3-002',
      title: 'Vitamin D3 vs D2 absorption study',
      url: 'https://pubmed.ncbi.nlm.nih.gov/25751511/',
      source: 'PubMed',
      type: 'meta-analysis',
      year: 2015,
      educationalNotes: ['D3 is 87% more effective than D2', 'Better at raising blood levels', 'Superior tissue distribution']
    }
  ],

  'omega-3-fatty-acids': [
    {
      id: 'omg3-001',
      title: 'Effect of omega-3 fatty acids on cardiovascular outcomes: A systematic review and meta-analysis',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8413259/',
      source: 'PubMed',
      type: 'meta-analysis',
      year: 2021,
      educationalNotes: ['A systematic review and meta-analysis on the effect of Omega-3 FAs on cardiovascular outcomes.', 'Found Omega-3 FAs reduced cardiovascular mortality, non-fatal MI, and major adverse cardiovascular events (MACE).', 'Noted that EPA monotherapy showed higher risk reductions than EPA + DHA, but also increased the risk of atrial fibrillation and total bleeding.']
    },
    {
      id: 'omg3-002',
      title: 'Effect of Omega-3 Polyunsaturated Fatty Acids on Cardiovascular Outcomes in Patients with Diabetes: A Meta-analysis of Randomized Controlled Trials',
      url: 'https://www.sciencedirect.com/science/article/pii/S2161831323002946',
      source: 'Other',
      type: 'meta-analysis',
      year: 2023,
      educationalNotes: ['A meta-analysis of RCTs focused on patients with diabetes.', 'Found that Omega-3 FA supplementation reduced cardiovascular disease (CVD) risk in patients with diabetes (RR = 0.93).', 'Noted that eicosapentaenoic acid (EPA) alone, but not EPA + DHA, significantly reduced the risk of CVD in this population.']
    },
    {
      id: 'omg3-004',
      title: 'Bioavailability of EPA and DHA in humans – A comprehensive review',
      url: 'https://www.sciencedirect.com/science/article/pii/S0163782724000511',
      source: 'Other',
      type: 'review',
      year: 2025,
      educationalNotes: ['A comprehensive review on the bioavailability of EPA and DHA in humans.', 'Found that acute bioavailability differences based on chemical form (e.g., NEFA > EE) often do not persist in chronic supplementation.', 'Emphasizes the need for standardized protocols and robust chronic studies to clarify the clinical implications of bioavailability differences.']
    },
    {
      id: 'o3fa-004',
      title: 'Marine n−3 Fatty Acids and Prevention of Cardiovascular Disease and Cancer',
      url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa1811403',
      source: 'NEJM',
      type: 'RCT',
      year: 2018,
      educationalNotes: ['A large-scale, randomized, placebo-controlled trial (VITAL) on marine n-3 fatty acids (1g/day) for primary prevention of cardiovascular disease (CVD) and cancer.', 'Found that n-3 fatty acid supplementation did not result in a lower incidence of major CVD events or cancer than placebo in the general population.', 'A key finding for consumer education, as it contradicts common public perception about the benefits of fish oil for primary prevention.']
    },
    {
      id: 'o3fa-005',
      title: 'Associations of Plasma Omega-3 Fatty Acid Levels and Reported Fish Oil Supplement Use with Depression and Anxiety: A Cross-Sectional Analysis from the United Kingdom Biobank',
      url: 'https://www.sciencedirect.com/science/article/pii/S0022316625006807',
      source: 'The Journal of Nutrition',
      type: 'observational-study',
      year: 2025,
      educationalNotes: ['A large cross-sectional analysis from the UK Biobank on Omega-3 levels and depression/anxiety.', 'Found that higher plasma Omega-3 levels were inversely associated with a history of both depression and anxiety (15%-33% lower risk).', 'Fish oil supplement use was also associated with a lower risk for recent anxiety (20% lower risk).']
    },
    {
      id: 'o3fa-006',
      title: 'Omega-3 Fatty Acids for the Management of Hypertriglyceridemia: A Science Advisory From the American Heart Association',
      url: 'https://www.ahajournals.org/doi/10.1161/CIR.0000000000000709',
      source: 'Circulation (AHA)',
      type: 'science-advisory',
      year: 2019,
      educationalNotes: ['A science advisory from the American Heart Association (AHA) on the use of prescription Omega-3 Fatty Acids (n-3 FAs) for hypertriglyceridemia.', 'Concludes that prescription n-3 FAs (EPA+DHA or EPA-only) at a dose of 4 g/d are an effective and safe option for reducing triglycerides (by ≥30%) as monotherapy or as an adjunct to statins.', 'Notes that the use of EPA-only (Vascepa) for improving atherosclerotic cardiovascular disease risk in patients with hypertriglyceridemia is supported by a 25% reduction in major adverse cardiovascular events in the REDUCE-IT trial.']
    },
    {
      id: 'o3fa-007',
      title: 'Impact of omega-3 fatty acids on hypertriglyceridemia, lipidomics, and gut microbiome in patients with type 2 diabetes',
      url: 'https://www.sciencedirect.com/science/article/pii/S2666634024003064',
      source: 'Med (Cell Press)',
      type: 'RCT',
      year: 2025,
      educationalNotes: ['A randomized, double-blind, placebo-controlled trial (309 participants) on the effects of fish oil on hypertriglyceridemia in patients with Type 2 Diabetes (T2D).', 'Found that fish oil supplementation significantly reduced serum triglycerides and altered lipid profiles.', 'Highlighted that baseline gut microbiota characteristics were more predictive of the triglyceride-lowering efficacy than phenotypic or lipidomic features.']
    },
    {
      id: 'o3fa-008',
      title: 'Exploration of the optimized portrait of omega-3 polyunsaturated fatty acids in treating depression: A meta-analysis of randomized-controlled trials',
      url: 'https://www.sciencedirect.com/science/article/pii/S0165032725003441',
      source: 'Journal of Affective Disorders',
      type: 'meta-analysis',
      year: 2025,
      educationalNotes: ['A meta-analysis of RCTs on Omega-3 PUFAs for depression.', 'Found Omega-3 PUFAs might be effective in treating depression, especially among Asians with mild to moderate depression and no other underlying medication.', 'Suggested an optimal dose of 1000–1500 mg/day with an EPA/DHA ratio of 1:1 to 2:1 over 8 weeks.']
    },
    {
      id: 'o3fa-009',
      title: 'Omega-3 Polyunsaturated Fatty Acids and Cognitive Decline in Adults with Non-Dementia or Mild Cognitive Impairment: An Overview of Systematic Reviews',
      url: 'https://www.mdpi.com/2072-6643/17/18/3002',
      source: 'Nutrients',
      type: 'umbrella-review',
      year: 2025,
      educationalNotes: ['An umbrella review of 9 systematic reviews (SRs) incorporating 14 RCTs (26,881 participants) on Omega-3 PUFAs and cognitive decline.', 'Found a statistically significant but modest improvement in MMSE scores (effect size: 0.16) in adults aged 40+.', 'Concluded that n3-PUFA supplementation is a complementary approach to lifestyle-based strategies for cognitive health, but benefits appear modest.']
    },
    {
      id: 'o3fa-010',
      title: 'Effect of omega-3 fatty acids on cardiovascular disease risk: A systematic review and meta-analysis with meta-regression',
      url: 'https://onlinelibrary.wiley.com/doi/full/10.1002/ctd2.70094',
      source: 'Clinical and Translational Discovery',
      type: 'meta-analysis',
      year: 2025,
      educationalNotes: ['A systematic review and meta-analysis of 42 studies (176,253 participants) on Omega-3 FA and cardiovascular disease (CVD) risk.', 'Demonstrates that omega-3 FA are associated with a significant reduction in CVD mortality (p=.02), CVD disease (p=.03), and coronary heart disease (CHD) (p=.007).', 'Aims to clarify the difference in efficacy between EPA monotherapy and an EPA+DHA combination regimen and explore dose-dependent relationships.']
    }
  ],

  'omega-3': [
    {
      id: 'o3-001',
      title: 'Omega-3 fatty acids and heart health',
      url: 'https://pubmed.ncbi.nlm.nih.gov/25833687/',
      source: 'PubMed',
      type: 'meta-analysis',
      year: 2015,
      educationalNotes: ['Reduces cardiovascular risk', 'Lowers triglyceride levels', 'Supports heart rhythm']
    },
    {
      id: 'o3-002',
      title: 'Omega-3 and brain health review',
      url: 'https://ods.od.nih.gov/factsheets/Omega3FattyAcids-HealthProfessional/',
      source: 'NIH',
      type: 'review',
      year: 2024,
      educationalNotes: ['Supports cognitive function', 'Reduces inflammation', 'May help with mood disorders']
    }
  ],

  'probiotics': [
    {
      id: 'prob-001',
      title: 'Probiotics and gastrointestinal disorders: an umbrella meta-analysis of therapeutic efficacy',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12183855/',
      source: 'PubMed',
      type: 'meta-analysis',
      year: 2025,
      educationalNotes: ['An umbrella meta-analysis showing probiotics significantly reduced symptoms like diarrhea, nausea, and bloating.', 'Found effects were more pronounced with shorter intervention durations (≤ 2–4 weeks) and multi-strain formulations.', 'Notes that moderate to high heterogeneity and generally low methodological quality in some included meta-analyses limit the robustness of the findings.']
    },
    {
      id: 'prob-002',
      title: 'Systematic review and meta-analysis of randomized controlled trials on pre-, pro-, post- and synbiotic supplementation in follow-on formula',
      url: 'https://www.sciencedirect.com/science/article/pii/S0261561425001505',
      source: 'Other',
      type: 'meta-analysis',
      year: 2025,
      educationalNotes: ['A systematic review and meta-analysis of RCTs on biotics in follow-on formula for children.', 'Found that the use of pre- and synbiotics appears more effective for viral respiratory infections than for diarrheal episodes.', 'Concluded that high-quality evidence is sparse and called for larger, well-designed trials with a primary health-related endpoint.']
    },
    {
      id: 'prob-003',
      title: 'Global analysis of clinical trials with probiotics',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7371762/',
      source: 'PubMed',
      type: 'review',
      year: 2020,
      educationalNotes: ['A global analysis of over 1,000 clinical trials with probiotics registered on ClinicalTrials.gov and ICTRP.', 'Found that Lactobacillus rhamnosus GG (LGG) and Bifidobacterium animalis ssp. lactis BB12 are the most frequently studied probiotic strains.', 'Highlights the importance of defining probiotics at the specific strain level due to the great diversity of probiotic bacteria.']
    },
    {
      id: 'prob-004',
      title: 'An evidence-based update on the diagnosis and management of irritable bowel syndrome',
      url: 'https://www.tandfonline.com/doi/full/10.1080/07853890.2025.2455586',
      source: 'Expert Review of Gastroenterology & Hepatology',
      type: 'review',
      year: 2025,
      educationalNotes: ['An expert review on the diagnosis and management of Irritable Bowel Syndrome (IBS).', 'Mentions that probiotics may be beneficial for IBS symptoms, but the quality of evidence is poor for specific strains and formulations.', 'Highlights that psychological therapies (CBT, hypnotherapy) are effective for persistent symptoms.']
    },
    {
      id: 'prob-005',
      title: 'Probiotics reduce negative mood over time: the value of daily self-reports in detecting effects',
      url: 'https://www.nature.com/articles/s44184-025-00123-z',
      source: 'npj Mental Health Research',
      type: 'RCT',
      year: 2025,
      educationalNotes: ['A randomized, double-blind, placebo-controlled study in 88 healthy volunteers on the effects of a multispecies probiotic on emotion and mood.', 'Found clear evidence that probiotics reduce negative mood, starting after two weeks, based on daily monitoring.', 'Concludes that probiotics can benefit mental health in the general population, especially when using sensitive daily monitoring methods.']
    },
    {
      id: 'prob-006',
      title: 'The effect of probiotics on weight management in patients with severe obesity undergoing metabolic and bariatric surgery: a systematic review and meta-analysis',
      url: 'https://www.tandfonline.com/doi/full/10.1080/07853890.2025.2551284',
      source: 'Annals of Medicine',
      type: 'meta-analysis',
      year: 2025,
      educationalNotes: ['A systematic review and meta-analysis on the effect of probiotics on weight management after metabolic and bariatric surgery (MBS).', 'Found no significant difference in weight loss or BMI reduction between probiotics and control groups.', 'Concluded that current evidence does not support the routine use of probiotics for enhancing weight loss after MBS.']
    },
    {
      id: 'prob-007',
      title: 'The efficacy of probiotics, prebiotics, and synbiotics on anxiety, depression, and sleep: a systematic review and meta-analysis of randomized controlled trials',
      url: 'https://link.springer.com/article/10.1186/s12888-025-07644-z',
      source: 'BMC Psychiatry',
      type: 'meta-analysis',
      year: 2025,
      educationalNotes: ['A systematic review and meta-analysis of 72 RCTs (6,097 participants) on the effect of probiotics, prebiotics, and synbiotics on mental health.', 'Found significant reductions in depression (SMD = − 0.53) and anxiety (SMD = − 0.44) compared to placebo.', 'Also showed improvement in sleep quality (SMD = − 0.39). Concluded that these supplements offer promising adjunctive treatments.']
    },
    {
      id: 'prob-008',
      title: 'Additive efficacy and safety of probiotics in the treatment of ulcerative colitis: a systematic review and meta-analysis',
      url: 'https://link.springer.com/article/10.1007/s00394-023-03307-5',
      source: 'European Journal of Nutrition',
      type: 'meta-analysis',
      year: 2024,
      educationalNotes: ['A systematic review and meta-analysis on the additive efficacy of probiotics in the treatment of ulcerative colitis (UC).', 'Found that for patients in clinical remission, the clinical relapse rates were significantly lower in the probiotic group compared to the placebo group (OR: 0.34).', 'For patients with active UC, probiotics boosted the remission rate but failed to reach statistical significance, suggesting a stronger role for probiotics in maintaining remission.']
    },
    {
      id: 'prob-009',
      title: 'Probiotics\' Effects in the Treatment of Anxiety and Depression: A Comprehensive Review of 2014–2023 Clinical Trials',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10893170/',
      source: 'PMC',
      type: 'review',
      year: 2024,
      educationalNotes: ['A comprehensive review of clinical trials from 2014–2023 on the effects of probiotics on anxiety and depression.', 'Concludes that while research is extensive, findings are inconsistent, suggesting the need for more targeted studies on specific strains and patient populations.', 'Highlights that the probiotic combination of L. helveticus and B. longum has been shown to reduce psychological distress in healthy volunteers.']
    },
    {
      id: 'prob-010',
      title: 'Effects of oral supplementation of probiotics on body weight and visceral fat in obese patients: a meta-analysis and systematic review',
      url: 'https://www.nature.com/articles/s41598-025-90820-8',
      source: 'Scientific Reports',
      type: 'meta-analysis',
      year: 2025,
      educationalNotes: ['A meta-analysis and systematic review on the effects of oral probiotics on body composition in obese patients.', 'Found that probiotics significantly reduced body weight, waist circumference, and visceral fat content compared to the control group.', 'Concluded that oral probiotics may be a potential nutritional treatment for obesity, though the effect on BMI was not significant.']
    }
  ],

  'creatine': [
    {
      id: 'creat-001',
      title: 'The effects of creatine supplementation on cognitive function in adults: a systematic review and meta-analysis',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11275561/',
      source: 'PubMed',
      type: 'meta-analysis',
      year: 2024,
      educationalNotes: ['A systematic review and meta-analysis on creatine\'s effect on adult cognitive function.', 'Found significant positive effects on memory, attention time, and processing speed time.', 'The certainty of evidence for memory function is moderate, while evidence for other cognitive domains is low.']
    },
    {
      id: 'creat-002',
      title: 'Effects of Creatine Supplementation and Resistance Training on Muscle Strength Gains in Adults <50 Years of Age: A Systematic Review and Meta-Analysis',
      url: 'https://www.mdpi.com/2072-6643/16/21/3665',
      source: 'Other',
      type: 'meta-analysis',
      year: 2024,
      educationalNotes: ['A systematic review and meta-analysis on creatine for muscle strength in adults <50.', 'Found that creatine supplementation combined with resistance training significantly increased upper- and lower-body muscle strength.', 'Noted a trend for greater lower-body strength gains from high-dose creatine and greater benefits likely in males than females.']
    },
    {
      id: 'creat-003',
      title: 'Creatine and Cognition in Aging: A Systematic Review of Evidence in Older Adults',
      url: 'https://pubmed.ncbi.nlm.nih.gov/40971619/',
      source: 'PubMed',
      type: 'systematic-review',
      year: 2025,
      educationalNotes: ['A systematic review on creatine and cognition in older adults (aged 55+).', 'Found that five of six included studies reported a positive relationship between creatine and cognition, particularly in memory and attention.', 'Concluded that the current limited evidence suggests potential benefits for cognition in generally healthy older adults, but high-quality clinical trials are warranted.']
    },
    {
      id: 'crea-004',
      title: 'Creatine supplementation for treating symptoms of depression: a systematic review and meta-analysis',
      url: 'https://www.cambridge.org/core/journals/british-journal-of-nutrition/article/abs/creatine-supplementation-for-treating-symptoms-of-depression-a-systematic-review-and-metaanalysis/32402D649A44771955050ED518B6E564',
      source: 'British Journal of Nutrition',
      type: 'meta-analysis',
      year: 2025,
      educationalNotes: ['A systematic review and meta-analysis of 11 trials (1093 participants) on creatine supplementation for symptoms of depression.', 'Found a small-to-moderate benefit for individuals with depression, but the average effect was not clinically important (below the minimal important difference of 3.0 points on the Hamilton Depression Rating Scale).', 'Concluded that the evidence is very uncertain and larger, more rigorous trials are required to draw definitive conclusions.']
    },
    {
      id: 'crea-005',
      title: 'The effects of creatine supplementation on cognitive function in adults: a systematic review and meta-analysis',
      url: 'https://www.frontiersin.org/journals/nutrition/articles/10.3389/fnut.2024.1424972/full',
      source: 'Frontiers in Nutrition (PubMed)',
      type: 'meta-analysis',
      year: 2024,
      educationalNotes: ['A systematic review and meta-analysis of 16 RCTs (492 participants) on the effects of creatine monohydrate on cognitive function in adults.', 'Found significant positive effects on memory and attention time, and significantly improved processing speed time.', 'Concluded that creatine monohydrate supplementation may confer beneficial effects on cognitive function in adults, particularly for memory, but the certainty of evidence is low for most outcomes.']
    },
    {
      id: 'creat-006',
      title: 'The Effects of Creatine Supplementation on Upper- and Lower-Body Strength and Power: A Systematic Review and Meta-Analysis',
      url: 'https://www.mdpi.com/2072-6643/17/17/2748',
      source: 'Nutrients',
      type: 'meta-analysis',
      year: 2025,
      educationalNotes: ['A systematic review and meta-analysis on the effects of Creatine supplementation combined with resistance training on muscle strength and power.', 'Found small but statistically significant improvements in squat strength, bench/chest press strength, vertical jump, and Wingate peak power compared to placebo.', 'Subgroup analysis showed greater benefits in younger adults and males, with smaller or non-significant changes in older adults and females.']
    },
    {
      id: 'creat-007',
      title: 'The effects of creatine supplementation on cognitive function in adults: a systematic review and meta-analysis',
      url: 'https://www.frontiersin.org/journals/nutrition/articles/10.3389/fnut.2024.1424972/full',
      source: 'Frontiers in Nutrition',
      type: 'meta-analysis',
      year: 2024,
      educationalNotes: ['A systematic review and meta-analysis of 16 RCTs (492 participants) on the effect of creatine monohydrate on cognitive function.', 'Found significant positive effects on memory and attention time, and significantly improved processing speed time.', 'Concluded that creatine monohydrate supplementation may confer beneficial effects on cognitive function in adults, particularly for memory, but the certainty of evidence is low for most outcomes.']
    },
    {
      id: 'creat-008',
      title: 'Creatine Supplementation in Depression: A Review of Mechanisms, Efficacy, Clinical Outcomes, and Future Directions',
      url: 'https://www.cureus.com/articles/301707-creatine-supplementation-in-depression-a-review-of-mechanisms-efficacy-clinical-outcomes-and-future-directions',
      source: 'Cureus',
      type: 'review',
      year: 2024,
      educationalNotes: ['A narrative review on the potential of creatine as an adjunctive therapy for depression.', 'Creatine\'s mechanism involves enhancing brain energy metabolism and providing neuroprotection, which can alleviate mood disorders.', 'Creatine supplementation reduces depressive symptoms, particularly when combined with selective serotonin reuptake inhibitors (SSRIs).']
    },
    {
      id: 'creat-009',
      title: 'The Effects of Creatine Supplementation on Upper- and Lower-Body Strength and Power: A Systematic Review and Meta-Analysis',
      url: 'https://www.mdpi.com/2072-6643/17/17/2748',
      source: 'Nutrients',
      type: 'meta-analysis',
      year: 2025,
      educationalNotes: ['A systematic review and meta-analysis on the effects of creatine supplementation combined with resistance training on strength and power.', 'Found small but statistically significant improvements in upper-body strength (bench/chest press), lower-body strength (squat), vertical jump, and Wingate peak power.', 'Benefits were most pronounced in younger adults and males.']
    },
    {
      id: 'creat-010',
      title: 'Impact of creatine supplementation and exercise training in older adults: a systematic review and meta-analysis',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12506341/',
      source: 'PMC',
      type: 'meta-analysis',
      year: 2025,
      educationalNotes: ['A systematic review and meta-analysis on the effects of creatine and exercise training on older adults\' physical performance and body composition.', 'Found a significant positive effect on 1-Repetition Maximum (1RM) strength and a significant reduction in fat percentage.', 'Creatine and exercise training did not have a significant effect on total body bone mineral density (BMD).']
    }
  ],

  'antioxidants': [
    {
      id: 'antiox-001',
      title: 'The Effect of Antioxidant Polyphenol Supplementation on Cardiometabolic Risk Factors: A Systematic Review and Meta-Analysis',
      url: 'https://www.mdpi.com/2072-6643/16/23/4206',
      source: 'Other',
      type: 'meta-analysis',
      year: 2024,
      educationalNotes: ['A systematic review and meta-analysis on the effect of polyphenol antioxidant supplements on cardiometabolic risk factors.', 'Found that multiple polyphenol supplements improved cardiovascular risk markers, such as catechin decreasing blood pressure and anthocyanin improving blood lipid profiles.', 'Supports the potential role of these supplements in cardiovascular health promotion.']
    },
    {
      id: 'antiox-003',
      title: 'Vitamins E and C in the Prevention of Prostate and Total Cancer in Men: The Physicians\' Health Study II, a Randomized Controlled Trial',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2774210/',
      source: 'PubMed',
      type: 'RCT',
      year: 2008,
      educationalNotes: ['A large-scale, long-term randomized controlled trial (RCT) on the effect of Vitamin E and C supplementation on cancer prevention in men.', 'Found that neither Vitamin E nor Vitamin C had a significant effect on the incidence of prostate cancer or total cancer events.', 'This study is a key piece of evidence suggesting that general antioxidant supplementation may not be effective for cancer prevention in healthy populations.']
    },
    {
      id: 'antiox-004',
      title: 'Association of antioxidants intake in diet and supplements with risk of Alzheimer\'s disease: a systematic review and dose-response meta-analysis of prospective cohort studies',
      url: 'https://link.springer.com/article/10.1007/s40520-024-02893-6',
      source: 'Aging Clinical and Experimental Research',
      type: 'systematic review',
      year: 2025,
      educationalNotes: ['A systematic review and dose-response meta-analysis on the association between antioxidant intake (diet and supplements) and Alzheimer\'s disease (AD) risk.', 'High dietary intake of Vitamin C (≥ 75 mg/d) was found to have a statistically significant impact on reducing the risk of AD.', 'No significant association was found for Vitamin E or beta-carotene supplements with AD risk.']
    },
    {
      id: 'antiox-005',
      title: 'Association Between Beta-Carotene Supplementation and Mortality: A Systematic Review and Meta-Analysis of Randomized Controlled Trials',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9343755/',
      source: 'PubMed',
      type: 'meta-analysis',
      year: 2022,
      educationalNotes: ['A systematic review and meta-analysis of 31 randomized controlled trials (RCTs) on beta-carotene supplementation and mortality.', 'Found that beta-carotene supplements had no preventive effect on all-cause, cancer, or cardiovascular mortality.', 'Instead, beta-carotene supplementation significantly increased the risk of lung cancer mortality (RR 1.14) but decreased the risk of HIV-related mortality (RR 0.55).']
    },
    {
      id: 'antiox-006',
      title: 'The Effect of Beta-Carotene on Cognitive Function: A Systematic Review',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10605009/',
      source: 'PubMed',
      type: 'systematic-review',
      year: 2023,
      educationalNotes: ['A systematic review on the effect of beta-carotene on cognitive function.', 'Found that beta-carotene consumption alone did not improve cognitive function in the short term, but only in a long-term intervention (mean duration of 18 years).', 'Suggested that beta-carotene is most beneficial when combined with a multicomplex of other antioxidants like Vitamin E, Vitamin C, zinc, or selenium.']
    },
    {
      id: 'antiox-007',
      title: 'Vitamins C and E and Beta Carotene Supplementation and Cancer Risk: A Randomized Controlled Trial',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2615459/',
      source: 'PubMed',
      type: 'RCT',
      year: 2009,
      educationalNotes: ['A large randomized controlled trial (RCT) on the effect of Vitamin C, Vitamin E, and Beta Carotene on cancer risk.', 'Found no statistically significant effects of any antioxidant on total cancer incidence or cancer mortality.', 'The study suggests that supplementation with these antioxidants offers no overall benefits in the primary prevention of total cancer.']
    },
    {
      id: 'antiox-008',
      title: 'Dietary Supplements and Risk of Cause-Specific Death, Cardiovascular Disease, and Cancer: A Systematic Review and Meta-Analysis of Primary Prevention Trials',
      url: 'https://www.sciencedirect.com/science/article/pii/S216183132300220X',
      source: 'ScienceDirect',
      type: 'meta-analysis',
      year: 2017,
      educationalNotes: ['A systematic review and meta-analysis of primary prevention trials on dietary supplements and risk of cause-specific death, CVD, and cancer.', 'Found that Vitamin E significantly reduced cardiovascular mortality risk, and folic acid reduced the risk of CVD.', 'However, Vitamin A was linked to an increased cancer risk, and β-carotene given singly was associated with an increased risk of all-cause mortality by 6%.']
    },
    {
      id: 'antiox-009',
      title: 'A Systematic Review of Effects of Vitamin E on the Cardiovascular System',
      url: 'https://pubmed.ncbi.nlm.nih.gov/34277234/',
      source: 'PubMed/Cureus',
      type: 'systematic-review',
      year: 2021,
      educationalNotes: ['A systematic review to determine the association between Vitamin E and cardiovascular diseases (CVDs).', 'The majority of the papers (75% of the total population) suggested no role of Vitamin E in preventing CVD and CVD mortality.', 'The review concludes that one should be prudent about taking Vitamin E supplementation for cardiovascular risk prevention.']
    },
    {
      id: 'antiox-010',
      title: 'Limited evidence for a beneficial effect of vitamin C supplementation on biomarkers of cardiovascular diseases: an umbrella review of systematic reviews and meta-analyses',
      url: 'https://pubmed.ncbi.nlm.nih.gov/30683434/',
      source: 'PubMed/Nutr Res',
      type: 'umbrella-review',
      year: 2019,
      educationalNotes: ['An umbrella review of systematic reviews and meta-analyses on the effects of Vitamin C supplementation on cardiovascular disease (CVD) biomarkers.', 'Concluded that the current evidence base is weak, with limited evidence for a beneficial effect on CVD risk markers.', 'Suggested that certain subgroups (older people, obese, those with lower baseline Vitamin C status) may be more responsive to supplementation.']
    },
    {
      id: 'antiox-011',
      title: 'Vitamin A supplementation for preventing morbidity and mortality in children from six months to five years of age',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8925277/',
      source: 'Cochrane Database Syst Rev',
      type: 'meta-analysis',
      year: 2022,
      educationalNotes: ['A Cochrane systematic review and meta-analysis of 19 trials (1.2 million children) on Vitamin A supplementation (VAS) in children.', 'Found a 12% reduction in the risk of all-cause mortality for VAS compared with control (high-certainty evidence).', 'VAS also reduced mortality due to diarrhea and reduced the incidence of diarrhea, measles, and night blindness.']
    }
  ],

  'arginine': [
    {
      id: 'arg-001',
      title: 'L-arginine supplementation and risk factors of cardiovascular diseases in healthy men: a double-blind randomized clinical trial',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5510020/',
      source: 'PubMed',
      type: 'RCT',
      year: 2017,
      educationalNotes: ['A double-blind randomized clinical trial on L-arginine supplementation in healthy men.', 'Found that L-arginine significantly decreased fasting blood sugar and improved lipid profile (TG, cholesterol, LDL, HDL) compared to placebo.', 'No significant changes were found in systolic or diastolic blood pressure.']
    },
    {
      id: 'arg-003',
      title: 'Effect of l-Arginine Supplementation on Blood Pressure in Adults: A Systematic Review and Dose–Response Meta-analysis of Randomized Clinical Trials',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9340976/',
      source: 'PubMed',
      type: 'meta-analysis',
      year: 2021,
      educationalNotes: ['A systematic review and dose-response meta-analysis of RCTs on L-arginine and blood pressure.', 'Found significant decreases in both systolic and diastolic blood pressure after L-arginine supplementation.', 'Identified an effective dosage of L-arginine supplementation to be ≥4 g/d for SBP reduction.']
    },
    {
      id: 'arg-004',
      title: 'Association of l-Arginine Supplementation with Markers of Endothelial Function in Patients with Cardiovascular or Metabolic Disorders: A Systematic Review and Meta-Analysis',
      url: 'https://www.mdpi.com/2072-6643/11/1/15',
      source: 'Nutrients',
      type: 'meta-analysis',
      year: 2019,
      educationalNotes: ['A systematic review and meta-analysis on the effects of L-Arginine supplementation on endothelial function in patients with cardiovascular or metabolic disorders.', 'Overall, the results indicated that oral L-Arginine supplementation was not associated with improvements in selected variables (e.g., blood flow) in these patient groups.', 'Sensitivity analysis showed a positive result in favor of arginine supplementation when studies with high heterogeneity were removed, suggesting the need for more consistent research.']
    },
    {
      id: 'arg-005',
      title: 'Effects of Arginine Supplementation on Athletic Performance Based on Energy Metabolism: A Systematic Review and Meta-Analysis',
      url: 'https://www.mdpi.com/2072-6643/12/5/1300',
      source: 'Nutrients',
      type: 'meta-analysis',
      year: 2020,
      educationalNotes: ['A systematic review and meta-analysis on the effects of Arginine (Arg) supplementation on athletic performance.', 'Found that Arg supplementation could improve both aerobic (large effect size) and anaerobic (small effect size) performance tests.', 'Recommended acute protocols of 0.15 g/kg body weight 60–90 min before exercise, and chronic protocols of 1.5–2 g/day for 4–7 weeks for aerobic performance.']
    },
    {
      id: 'arg-006',
      title: 'The Effect of Amino Acids on Wound Healing: A Systematic Review and Meta-Analysis on Arginine and Glutamine',
      url: 'https://www.mdpi.com/2072-6643/13/8/2498',
      source: 'Nutrients',
      type: 'meta-analysis',
      year: 2021,
      educationalNotes: ['A systematic review and meta-analysis on the effect of arginine and glutamine supplementation on wound healing.', 'Found a significant effect of arginine supplementation on hydroxyproline content, a key component of collagen and wound healing.', 'Glutamine supplementation showed significant positive effects on nitrogen balance, reduced inflammatory markers (IL-6, TNFα, CRP), and decreased length of hospital stay and patient mortality.']
    },
    {
      id: 'arg-007',
      title: 'Effect of l-Arginine Supplementation on Blood Pressure in Adults: A Systematic Review and Dose-Response Meta-analysis of Randomized Clinical Trials',
      url: 'https://pubmed.ncbi.nlm.nih.gov/34967840/',
      source: 'PubMed',
      type: 'meta-analysis',
      year: 2022,
      educationalNotes: ['A systematic review and dose-response meta-analysis of randomized clinical trials on L-arginine and blood pressure.', 'Found significant decreases in both systolic blood pressure (SBP) and diastolic blood pressure (DBP) after L-arginine supplementation.', 'The effective dosage of L-arginine supplementation was detected to be ≥4 g/d for SBP, independent of trial duration.']
    },
    {
      id: 'arg-008',
      title: 'Effects of Arginine Supplementation on Athletic Performance Based on Energy Metabolism: A Systematic Review and Meta-Analysis',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7282262/',
      source: 'PMC',
      type: 'meta-analysis',
      year: 2020,
      educationalNotes: ['A systematic review and meta-analysis on the effects of Arginine (Arg) supplementation on aerobic and anaerobic performance.', 'Found that Arg supplementation significantly improved both aerobic and anaerobic performance.', 'Suggests acute protocols of 0.15 g/kg of body weight 60–90 min before exercise, or chronic protocols of 1.5–2 g/day for 4–7 weeks for aerobic performance.']
    },
    {
      id: 'arg-009',
      title: 'The Effect of Amino Acids on Wound Healing: A Systematic Review and Meta-Analysis on Arginine and Glutamine',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8399682/',
      source: 'PMC',
      type: 'meta-analysis',
      year: 2021,
      educationalNotes: ['A systematic review and meta-analysis on the effect of arginine and glutamine supplementation on wound healing.', 'Arginine supplementation showed a significant effect on hydroxyproline content, a key component of collagen and wound healing.', 'Glutamine supplementation showed significant benefits in reducing inflammation (IL-6, TNFα, CRP) and length of hospital stay.']
    },
    {
      id: 'arg-010',
      title: 'Arginine on immune function and post-operative obstructions in colorectal cancer patients: a meta-analysis',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11370068/',
      source: 'PMC',
      type: 'meta-analysis',
      year: 2024,
      educationalNotes: ['A meta-analysis on the impact of arginine on immune function and postoperative complications in colorectal cancer (CRC) patients.', 'Arginine supplementation showed notable improvements in humoral immunity (IgA, IgG, IgM) and cellular immunity (CD4+ T cell count).', 'Also found a lower rate of surgical site infections (SSIs) and a shorter length of hospital stay (LOS) in the arginine group.']
    }
  ],

  'ashwagandha': [
    {
      id: 'ash-001',
      title: 'Ashwagandha for stress and anxiety',
      url: 'https://pubmed.ncbi.nlm.nih.gov/31991275/',
      source: 'PubMed',
      type: 'meta-analysis',
      year: 2020,
      educationalNotes: ['Reduces stress by 39%', 'Lowers cortisol levels', 'Improves sleep quality']
    },
    {
      id: 'ashwa-001',
      title: 'The effect of Withania somnifera (Ashwagandha) on mental health symptoms in individuals with mental disorders: systematic review and meta-analysis',
      url: 'https://www.cambridge.org/core/journals/bjpsych-open/article/effect-of-withania-somnifera-ashwagandha-on-mental-health-symptoms-in-individuals-with-mental-disorders-systematic-review-and-metaanalysis/03E125C83F064624A208CF9142A6185D',
      source: 'BJPsych Open (Cambridge Core)',
      type: 'meta-analysis',
      year: 2025,
      educationalNotes: ['A systematic review and meta-analysis on Ashwagandha\'s effect on mental health symptoms in individuals with mental disorders.', 'Found evidence supporting the effectiveness of Ashwagandha in improving anxiety, depression, stress, and sleep quality symptoms.', 'Concluded that future trials should replicate the anxiety finding in larger samples and further clarify its role in depression and insomnia treatment.']
    },
    {
      id: 'ashwa-002',
      title: 'Safety of 12-Months Administration of Ashwagandha (Withania somnifera) Standardized Root Extract in Healthy Adults: A Prospective, Observational Study',
      url: 'https://onlinelibrary.wiley.com/doi/10.1002/ptr.70096',
      source: 'Phytotherapy Research',
      type: 'observational-study',
      year: 2025,
      educationalNotes: ['A prospective, multi-center, observational clinical study (N=191) evaluating the long-term safety of Ashwagandha Root Extract (ARE) over 12 months.', 'Found the extract to be safe with no clinically significant changes in liver enzymes (ALT/AST).', 'Reported significant decreases in serum cortisol and significant increases in serum testosterone (free and total), along with enhanced health-related quality of life.']
    },
    {
      id: 'ashwa-003',
      title: 'Ashwagandha (Withania somnifera) for the treatment and enhancement of mental and physical conditions: A systematic review of human trials',
      url: 'https://www.sciencedirect.com/science/article/abs/pii/S2210803321000142',
      source: 'Journal of Herbal Medicine',
      type: 'systematic-review',
      year: 2021,
      educationalNotes: ['A systematic review of 41 human trials on Ashwagandha\'s effects on mental and physical conditions.', 'Found the strongest evidence for therapeutic efficacy is the alleviation of stress and anxiety symptoms.', 'Concluded that Ashwagandha has a potentially large array of therapeutic applications, but further research with robust designs is required due to significant heterogeneity and small sample sizes in existing studies.']
    },
    {
      id: 'ash-005',
      title: 'Effects of Ashwagandha (Withania Somnifera) on stress and anxiety: A systematic review and meta-analysis',
      url: 'https://www.sciencedirect.com/science/article/abs/pii/S1550830724001691',
      source: 'Explore',
      type: 'meta-analysis',
      year: 2024,
      educationalNotes: ['A systematic review and meta-analysis of 9 studies (558 patients) on the effects of Ashwagandha on stress and anxiety.', 'Found significant reductions in perceived stress, anxiety, and serum cortisol levels compared to placebo.', 'Doses ranged from 125–600 mg daily for 30–90 days, with both root-only and root-and-leaf formulations showing benefits.']
    },
    {
      id: 'ash-006',
      title: 'Effect of Ashwagandha (Withania somnifera) extract on sleep: A systematic review and meta-analysis',
      url: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0257843',
      source: 'PLOS One',
      type: 'meta-analysis',
      year: 2021,
      educationalNotes: ['A systematic review and meta-analysis of 5 RCTs (400 participants) on the effect of Ashwagandha extract on sleep.', 'Found a small but significant effect on overall sleep (SMD -0.59).', 'The effects were more prominent in the subgroup of adults diagnosed with insomnia, with treatment dosage ≥600 mg/day and duration ≥8 weeks. Also improved mental alertness and anxiety.']
    },
    {
      id: 'ashwa-007',
      title: 'The effect of Ashwagandha (Withania somnifera) on sports performance: a systematic review and meta-analysis',
      url: 'https://journalofsportsmedicine.org/full-text/752/eng',
      source: 'Turkish Journal of Sports Medicine',
      type: 'meta-analysis',
      year: 2025,
      educationalNotes: ['A systematic review and meta-analysis on the effect of Ashwagandha on sports performance.', 'Found that Ashwagandha supplementation (300 mg to 500 mg aqueous root extract daily for 8 to 12 weeks) is effective in enhancing sports performance.', 'Showed significant improvements in cardiorespiratory fitness (VO2max), muscle strength, and recovery.']
    },
    {
      id: 'ashwa-008',
      title: 'Effects of Ashwagandha (Withania Somnifera) on stress and anxiety: A systematic review and meta-analysis',
      url: 'https://www.sciencedirect.com/science/article/abs/pii/S1550830724001691',
      source: 'ScienceDirect',
      type: 'meta-analysis',
      year: 2024,
      educationalNotes: ['A systematic review and meta-analysis of 9 studies (558 patients) on Ashwagandha for stress and anxiety.', 'Found that Ashwagandha significantly reduced stress, anxiety, and serum cortisol levels compared to placebo.', 'The findings suggest Ashwagandha is a promising natural intervention for stress and anxiety management.']
    },
    {
      id: 'ashwa-009',
      title: 'Effect of Ashwagandha (Withania somnifera) extract on sleep: A systematic review and meta-analysis',
      url: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0257843',
      source: 'PLOS One',
      type: 'meta-analysis',
      year: 2021,
      educationalNotes: ['A systematic review and meta-analysis of five randomized controlled trials on Ashwagandha extract and sleep.', 'Found a small but significant effect on overall sleep, with more prominent effects in adults with insomnia, treatment dosage ≥600 mg/day, and duration ≥8 weeks.', 'Also found to improve mental alertness on rising and anxiety level.']
    },
    {
      id: 'ashwa-010',
      title: 'The effect of Ashwagandha (Withania somnifera) on sports performance: a systematic review and meta-analysis',
      url: 'https://journalofsportsmedicine.org/full-text/752/eng',
      source: 'Turkish Journal of Sports Medicine',
      type: 'meta-analysis',
      year: 2025,
      educationalNotes: ['A systematic review and meta-analysis of eight studies on Ashwagandha and sports performance.', 'Ashwagandha supplementation (300-500 mg daily for 8-12 weeks) was found to be effective in enhancing sports performance.', 'Significantly improved VO2max in athletes by 4.09 ml/min/kg compared to placebo, and also improved muscle strength and recovery.']
    }
  ],

  'l-theanine': [
    {
      id: 'lth-001',
      title: 'L-Theanine and cognitive performance',
      url: 'https://pubmed.ncbi.nlm.nih.gov/21184855/',
      source: 'PubMed',
      type: 'review',
      year: 2011,
      educationalNotes: ['Improves focus and attention', 'Reduces anxiety', 'Enhances alpha brain waves']
    }
  ],

  'vitamin-b12': [
    {
      id: 'b12-001',
      title: 'Effects of Vitamin B12 Supplementation on Cognitive Function, Depressive Symptoms, and Fatigue: A Systematic Review, Meta-Analysis, and Meta-Regression',
      url: 'https://www.mdpi.com/2072-6643/13/3/923',
      source: 'Nutrients',
      type: 'meta-analysis',
      year: 2021,
      educationalNotes: ['A systematic review and meta-analysis of 16 randomized controlled trials (RCTs) on the effects of Vitamin B12 supplementation.', 'Found no evidence for an effect of B12 alone or B complex supplementation on any subdomain of cognitive function outcomes in the general population.', 'Also found no overall effect of vitamin supplementation on measures of depression.']
    },
    {
      id: 'b12-002',
      title: 'Efficacy of different routes of vitamin B12 supplementation for the treatment of patients with vitamin B12 deficiency: A systematic review and network meta-analysis',
      url: 'https://pubmed.ncbi.nlm.nih.gov/38231320/',
      source: 'Ir J Med Sci',
      type: 'meta-analysis',
      year: 2024,
      educationalNotes: ['A systematic review and network meta-analysis comparing oral, intramuscular (IM), and sublingual (SL) routes for Vitamin B12 supplementation.', 'Concluded that all three routes can effectively increase Vitamin B12 levels without statistically significant differences between them.', 'The IM route was the top-ranked statistically for increasing B12 levels, but the difference was not clinically significant.']
    },
    {
      id: 'b12-003',
      title: 'B12 as a Treatment for Peripheral Neuropathic Pain: A Systematic Review',
      url: 'https://www.mdpi.com/2072-6643/12/8/2221',
      source: 'Nutrients',
      type: 'systematic-review',
      year: 2020,
      educationalNotes: ['A systematic review on the use of Vitamin B12 (cobalamin) for peripheral neuropathic pain, even in the absence of B12 deficiency.', 'Found evidence for the therapeutic effect of B12 in the treatment of post-herpetic neuralgia and painful peripheral neuropathy.', 'B12 is thought to alleviate pain by promoting myelination, increasing nerve regeneration, and decreasing ectopic nerve firing.']
    },
    {
      id: 'b12-004',
      title: 'The efficacy of vitamin B12 supplementation for treating vitamin B12 deficiency and peripheral neuropathy in metformin-treated type 2 diabetes mellitus patients: A systematic review',
      url: 'https://www.sciencedirect.com/science/article/pii/S187140212200248X',
      source: 'Diabetes & Metabolic Syndrome: Clinical Research & Reviews',
      type: 'systematic-review',
      year: 2022,
      educationalNotes: ['A systematic review focusing on metformin-treated Type 2 Diabetes Mellitus (T2DM) patients.', 'Metformin-treated T2DM patients are at higher risk of Vitamin B12 deficiency and neuropathy.', 'Vitamin B12 supplementation increases serum levels and improves neuropathy symptoms, and should be included in treatment guidelines.']
    },
    {
      id: 'b12-005',
      title: 'Association between neuropathy and B-vitamins: A systematic review and meta-analysis',
      url: 'https://onlinelibrary.wiley.com/doi/10.1111/ene.14786',
      source: 'European Journal of Neurology',
      type: 'meta-analysis',
      year: 2021,
      educationalNotes: ['A systematic review and meta-analysis on the association between peripheral neuropathy (PN) and B-vitamins.', 'PN was significantly associated with lowered B12 levels and elevated methylmalonic acid and homocysteine (biomarkers of B12 deficiency).', 'B12 treatment showed a non-significant association with symptom improvement, suggesting the need for more robust trials.']
    },
    {
      id: 'b12-006',
      title: 'The Neurological Sequelae of Vitamin B12 Deficiency: A Systematic Review and Randomized Controlled Trial',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12143585/',
      source: 'Cureus',
      type: 'systematic-review',
      year: 2025,
      educationalNotes: ['A systematic review of RCTs on the neurological effects of B12 supplementation.', 'Supplementation is effective for patients with overt clinical deficiency (peripheral neuropathy, cognitive decline, myelopathy).', 'Oral therapy showed similar efficacy to intramuscular injections, with better tolerability and lower cost.', 'Limited neurological benefit was found in older adults with subclinical deficiency.']
    },
    {
      id: 'b12-007',
      title: 'Causal relationship between B vitamins and neuropsychiatric disorders: A systematic review and meta-analysis',
      url: 'https://www.sciencedirect.com/science/article/pii/S0149763425000685',
      source: 'Neuroscience & Biobehavioral Reviews',
      type: 'meta-analysis',
      year: 2025,
      educationalNotes: ['A Mendelian randomization (MR) meta-analysis on the causal relationship between B vitamins and neuropsychiatric disorders (NPDs).', 'Vitamin B12 appears to safeguard against Autism Spectrum Disorder (ASD) and Intellectual Disability (ID).', 'However, the study also suggests B12 may raise the risk for Schizophrenia (SCZ) and Bipolar Disorder (BD), highlighting the complexity of B vitamin effects on mental health.']
    },
    {
      id: 'b12-008',
      title: 'The Effectiveness of Cobalamin (B12) Treatment for Autism Spectrum Disorder: A Systematic Review and Meta-Analysis',
      url: 'https://www.mdpi.com/2075-4426/11/8/784',
      source: 'Journal of Personalized Medicine',
      type: 'meta-analysis',
      year: 2021,
      educationalNotes: ['A systematic review and meta-analysis on the use of B12 (specifically methylcobalamin, mB12) for Autism Spectrum Disorder (ASD).', 'mB12 treatment was associated with significant improvements in methylation capacity and the total glutathione/oxidized glutathione (GSH/GSSG) redox ratio.', 'These biochemical improvements were significantly associated with clinical improvements in core and associated ASD symptoms, including expressive communication and social skills.']
    },
    {
      id: 'b12-009',
      title: 'Diabetic Peripheral Neuropathy',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK442009/',
      source: 'StatPearls (NCBI Bookshelf)',
      type: 'review',
      year: 2024,
      educationalNotes: ['A comprehensive review of Diabetic Peripheral Neuropathy (DPN).', 'Lists nutritional deficiencies, specifically **low B12**, as a key etiology for peripheral neuropathy.', 'Highlights that DPN management includes addressing nutritional deficiencies and that metformin use is a risk factor for B12 deficiency.']
    },
    {
      id: 'b12-010',
      title: 'Efficacy of different routes of vitamin B12 supplementation for the treatment of patients with vitamin B12 deficiency: A systematic review and network meta-analysis',
      url: 'https://link.springer.com/article/10.1007/s11845-023-03602-4',
      source: 'Irish Journal of Medical Science',
      type: 'network-meta-analysis',
      year: 2024,
      educationalNotes: ['A network meta-analysis comparing oral, intramuscular (IM), and sublingual (SL) routes for B12 deficiency treatment.', 'All three routes (IM, oral, and SL) were found to be effective in increasing B12 levels.', 'The IM route ranked highest statistically, but the difference was not clinically significant, suggesting oral and sublingual routes are viable alternatives for many patients.']
    }
  ],

  'folate': [
    {
      id: 'nu-001',
      title: 'Folate Supplementation for Peripheral Neuropathy: A Systematic Review',
      url: 'https://www.mdpi.com/2072-6643/17/20/3299',
      source: 'Nutrients',
      type: 'systematic-review',
      year: 2025,
      educationalNotes: ['A systematic review on the role of folate (Vitamin B9) in managing peripheral neuropathy (PN).', 'Showed consistent symptomatic benefits with pain reductions and high symptom resolution rates.', 'Observed objective structural improvements in epidermal nerve fiber density (ENFD) and favorable biomarker changes (homocysteine, hs-CRP reduction).', 'Folate showed an excellent safety and tolerability profile.']
    }
  ]
}
