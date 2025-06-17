// 2. Complete [slug]/page.tsx with all 10 posts - FULLY STYLED - FIXED FOR NEXT.JS 15
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';

interface BlogPost {
  title: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
  metaDescription: string;
}

const getBlogPost = (slug: string): BlogPost | null => {
  const posts: Record<string, BlogPost> = {
    'spring-plumbing-checklist-2025-kamloops': {
      title: '2025 Spring Plumbing Checklist for Kamloops Homeowners',
      content: `
        <p class="text-gray-700 text-lg leading-relaxed mb-6">Spring is the perfect time to give your plumbing system a thorough checkup after the harsh Kamloops winter. This comprehensive checklist will help you identify potential issues early and keep your system running smoothly.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Spring Plumbing Maintenance Matters</h2>
        <p class="text-gray-700 leading-relaxed mb-6">Winter can be tough on plumbing systems. Temperature fluctuations, increased usage, and seasonal changes can create hidden problems that surface in spring. Early detection saves money and prevents major disruptions.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Indoor Plumbing Checklist</h2>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Test All Faucets and Fixtures</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Turn on every faucet, shower, and toilet to check for proper water flow and pressure. Look for leaks, drips, or unusual sounds.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Inspect Water Heater</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Check for corrosion, leaks, or unusual noises. Test water temperature and consider flushing the tank if it hasn't been done recently.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">3. Check Toilet Performance</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Ensure toilets flush properly and completely. Check for wobbling, leaks around the base, or running water.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">4. Test Shut-off Valves</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Locate and test main water shut-off valves and individual fixture valves to ensure they operate smoothly.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Outdoor Plumbing Tasks</h2>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Reconnect Outdoor Hoses</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Carefully reconnect hoses that were disconnected for winter. Check for freeze damage on hose bibbs and connections.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Inspect Sprinkler Systems</h3>
        <p class="text-gray-700 leading-relaxed mb-4">If you have irrigation, check for damaged sprinkler heads, broken pipes, or clogged nozzles before starting the system.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">3. Clear Drainage Areas</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Remove debris from gutters, downspouts, and drainage areas to prevent water backup and foundation issues.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Warning Signs to Watch For</h2>
        <ul class="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
          <li>Water stains on walls or ceilings</li>
          <li>Musty odors indicating hidden leaks</li>
          <li>Reduced water pressure</li>
          <li>Discolored or rusty water</li>
          <li>Unusually high water bills</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Professional Spring Maintenance</h2>
        <p class="text-gray-700 leading-relaxed mb-4">While many tasks can be done yourself, consider professional inspection for comprehensive system evaluation, including pipe integrity, water pressure testing, and leak detection.</p>
        
        <p class="text-gray-700 leading-relaxed">Our Kamloops team provides thorough spring plumbing inspections to ensure your system is ready for the year ahead.</p>
      `,
      date: '2025-05-15',
      category: 'Plumbing',
      readTime: '6 min read',
      metaDescription: 'Complete 2025 spring plumbing checklist for Kamloops homeowners. Ensure your plumbing system is ready after winter with our expert guide.',
    },
    'heat-pump-installation-kamloops-2025': {
      title: 'Heat Pump Installation Guide: Kamloops 2025 Rebates & Benefits',
      content: `
        <p class="text-gray-700 text-lg leading-relaxed mb-6">Heat pumps are revolutionizing home heating and cooling in Kamloops. With new 2025 government rebates and improved technology, now is the perfect time to consider this energy-efficient upgrade.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">What Are Heat Pumps?</h2>
        <p class="text-gray-700 leading-relaxed mb-6">Heat pumps are efficient systems that move heat rather than generate it. They can both heat and cool your home, making them ideal for Kamloops' variable climate.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">2025 Government Rebates Available</h2>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Federal Rebates</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Up to $5,000 for qualifying heat pump installations through the Canada Greener Homes Grant program.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">BC Provincial Incentives</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Additional provincial rebates of up to $3,000 for energy-efficient heat pump systems that meet specific criteria.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Utility Company Programs</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Local utility companies offer additional incentives for qualifying installations, potentially saving thousands more.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Types of Heat Pumps</h2>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Air Source Heat Pumps</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Most common and cost-effective option. Works well in Kamloops climate with modern cold-weather technology.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Ground Source (Geothermal)</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Higher initial cost but exceptional efficiency. Ideal for new construction or major renovations.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Ductless Mini-Splits</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Perfect for homes without existing ductwork or for zoned heating and cooling.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Benefits for Kamloops Homeowners</h2>
        <ul class="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
          <li>Significant energy cost savings year-round</li>
          <li>Reduced carbon footprint and environmental impact</li>
          <li>Both heating and cooling in one system</li>
          <li>Improved indoor air quality and comfort</li>
          <li>Increased home value and marketability</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Installation Considerations</h2>
        <p class="text-gray-700 leading-relaxed mb-4">Proper sizing, placement, and professional installation are crucial for optimal performance. Our certified technicians ensure your heat pump system is designed and installed for maximum efficiency in Kamloops conditions.</p>
        
        <p class="text-gray-700 leading-relaxed">Contact us to learn about available rebates and get a professional assessment for your home's heat pump potential.</p>
      `,
      date: '2025-04-20',
      category: 'Heating',
      readTime: '8 min read',
      metaDescription: 'Complete guide to heat pump installation in Kamloops for 2025. Learn about government rebates, benefits, and professional installation services.',
    },
    'water-heater-efficiency-upgrade-2025': {
      title: 'Water Heater Efficiency: 2025 Upgrade Options for Kamloops Homes',
      content: `
        <p class="text-gray-700 text-lg leading-relaxed mb-6">Water heating accounts for nearly 20% of your home's energy usage. With new efficient technologies available in 2025, upgrading your water heater can significantly reduce utility bills while improving performance.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Signs You Need a Water Heater Upgrade</h2>
        <ul class="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
          <li>Water heater is over 10-12 years old</li>
          <li>Inconsistent water temperature</li>
          <li>Rising energy bills</li>
          <li>Rusty or discolored water</li>
          <li>Strange noises from the unit</li>
          <li>Visible corrosion or leaks</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">2025 High-Efficiency Options</h2>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Condensing Gas Water Heaters</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Up to 96% efficiency rating, capturing and reusing heat that would otherwise be vented outside. Ideal for homes with natural gas access.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Heat Pump Water Heaters</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Electric units that use ambient air heat, reducing electricity usage by up to 70% compared to conventional electric heaters.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Tankless Water Heaters</h3>
        <p class="text-gray-700 leading-relaxed mb-4">On-demand heating eliminates standby losses. Available in gas or electric models with space-saving designs.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Solar Water Heating Systems</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Harness Kamloops' abundant sunshine to heat water. Often combined with backup systems for year-round reliability.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Energy Efficiency Ratings</h2>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">ENERGY STAR Certification</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Look for ENERGY STAR qualified models that meet strict efficiency guidelines and often qualify for rebates.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Uniform Energy Factor (UEF)</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Higher UEF ratings indicate better efficiency. Modern units range from 0.80 to 0.95+ UEF.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Cost Savings Calculation</h2>
        <p class="text-gray-700 leading-relaxed mb-4">A typical Kamloops family can save $200-400 annually with a high-efficiency water heater upgrade. Calculate your potential savings based on current usage and energy costs.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Available Rebates and Incentives</h2>
        <ul class="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
          <li>Federal government rebates up to $1,000</li>
          <li>BC Hydro PowerSmart rebates</li>
          <li>Manufacturer rebates and promotions</li>
          <li>Utility company efficiency programs</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Professional Installation Benefits</h2>
        <p class="text-gray-700 leading-relaxed mb-4">Proper sizing, installation, and setup ensure optimal performance and warranty coverage. Our certified technicians handle all aspects including permits, gas line modifications, and electrical connections.</p>
        
        <p class="text-gray-700 leading-relaxed">Contact us for a free assessment to determine the best water heater upgrade for your Kamloops home and lifestyle.</p>
      `,
      date: '2025-03-10',
      category: 'Plumbing',
      readTime: '5 min read',
      metaDescription: 'Explore 2025 water heater efficiency upgrades for Kamloops homes. Learn about new technologies, rebates, and potential energy savings.',
    },
    'winter-plumbing-tips-kamloops': {
      title: 'Essential Winter Plumbing Tips for Kamloops Homeowners',
      content: `
        <p class="text-gray-700 text-lg leading-relaxed mb-6">Winter in Kamloops can be harsh on your plumbing system. With temperatures dropping well below freezing, protecting your pipes and fixtures is crucial to avoid costly repairs and water damage.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Winter Plumbing Problems Happen in Kamloops</h2>
        <p class="text-gray-700 leading-relaxed mb-6">Kamloops experiences significant temperature fluctuations during winter months, with lows often reaching -20°C or colder. This extreme cold can cause water in pipes to freeze and expand, leading to burst pipes and extensive water damage.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Essential Winter Plumbing Tips</h2>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Insulate Exposed Pipes</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Focus on pipes in unheated areas like basements, crawl spaces, and garages. Use foam pipe insulation or heat tape for extra protection.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Keep Faucets Dripping</h3>
        <p class="text-gray-700 leading-relaxed mb-4">During extremely cold nights, let faucets drip slightly. Moving water is less likely to freeze than standing water.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">3. Maintain Indoor Temperature</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Keep your thermostat at 18°C or higher, even when away. This helps maintain pipe temperature above freezing.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">4. Seal Air Leaks</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Check for drafts near pipes and seal gaps with caulk or weatherstripping. Cold air can quickly freeze pipes.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">5. Know Your Water Shut-off Valve</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Locate your main water shut-off valve before winter arrives. In case of a burst pipe, quick action can minimize damage.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Emergency Signs to Watch For</h2>
        <ul class="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
          <li>No water when you turn on faucets</li>
          <li>Strange smells from drains</li>
          <li>Frost on exposed pipes</li>
          <li>Unusual sounds from pipes</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">When to Call a Professional</h2>
        <p class="text-gray-700 leading-relaxed mb-4">If you discover frozen or burst pipes, contact a licensed Kamloops plumber immediately. Attempting DIY repairs on frozen pipes can cause more damage.</p>
        
        <p class="text-gray-700 leading-relaxed">Our experienced team serves the Kamloops area year-round, providing emergency plumbing services to keep your home safe and comfortable.</p>
      `,
      date: '2024-11-15',
      category: 'Plumbing',
      readTime: '5 min read',
      metaDescription: 'Protect your Kamloops home from winter plumbing disasters. Expert tips on preventing frozen pipes and emergency signs to watch for.',
    },
    'drain-cleaning-maintenance-kamloops': {
      title: 'Professional Drain Cleaning vs DIY: What Kamloops Homeowners Need to Know',
      content: `
        <p class="text-gray-700 text-lg leading-relaxed mb-6">Clogged drains are one of the most common plumbing issues Kamloops homeowners face. Knowing when to handle the problem yourself and when to call professionals can save time, money, and prevent damage.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Common Drain Problems in Kamloops Homes</h2>
        <p class="text-gray-700 leading-relaxed mb-6">Hard water, hair accumulation, food particles, and seasonal debris contribute to drain blockages. Understanding the type of clog helps determine the best solution approach.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">DIY Drain Cleaning Methods</h2>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Safe Home Remedies</h3>
        <ul class="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>Hot water flush for grease buildup</li>
          <li>Baking soda and vinegar for minor clogs</li>
          <li>Manual removal of visible blockages</li>
          <li>Plunging for toilet and sink clogs</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Tools for Homeowner Use</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Drain snakes, plungers, and basic augers can handle many simple clogs safely when used properly.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">When to Avoid DIY Methods</h2>
        <ul class="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
          <li>Recurring clogs that return quickly</li>
          <li>Multiple drains backing up simultaneously</li>
          <li>Sewage odors or backflow</li>
          <li>Gurgling sounds from other fixtures</li>
          <li>Water backing up in basement floor drains</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Professional Drain Cleaning Advantages</h2>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Advanced Equipment</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Professional hydro-jetting and video inspection technology can clear tough clogs and identify underlying issues.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Complete Cleaning</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Professional cleaning removes buildup from pipe walls, not just the immediate blockage, providing longer-lasting results.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Problem Diagnosis</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Camera inspections can identify root intrusion, pipe damage, or structural issues causing recurring problems.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Dangerous DIY Mistakes to Avoid</h2>
        <ul class="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
          <li>Using chemical drain cleaners repeatedly</li>
          <li>Excessive force with drain snakes</li>
          <li>Disassembling complex plumbing connections</li>
          <li>Ignoring safety precautions with tools</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Prevention Tips</h2>
        <p class="text-gray-700 leading-relaxed mb-4">Regular maintenance, proper disposal practices, and professional annual cleaning can prevent most serious drain problems.</p>
        
        <p class="text-gray-700 leading-relaxed">Our Kamloops drain cleaning specialists use state-of-the-art equipment to safely and effectively restore your drains to optimal performance.</p>
      `,
      date: '2024-08-22',
      category: 'Plumbing',
      readTime: '5 min read',
      metaDescription: 'Learn when to use DIY drain cleaning methods and when to call Kamloops professionals. Avoid costly mistakes with expert guidance.',
    },
    'furnace-maintenance-kamloops-winter': {
      title: 'Complete Furnace Maintenance Guide for Kamloops Winter',
      content: `
        <p class="text-gray-700 text-lg leading-relaxed mb-6">As Kamloops winter approaches, ensuring your furnace is in peak condition is essential for comfort and energy efficiency. Regular maintenance can prevent costly breakdowns and extend your system's lifespan.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Furnace Maintenance Matters in Kamloops</h2>
        <p class="text-gray-700 leading-relaxed mb-6">Kamloops winters can be unpredictable, with temperatures ranging from mild to extremely cold. A well-maintained furnace ensures consistent heating, lower energy bills, and peace of mind during the coldest months.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Essential Maintenance Tasks</h2>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Replace or Clean Air Filters</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Check filters monthly and replace every 1-3 months. Dirty filters reduce efficiency and can damage your system.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Inspect and Clean Vents</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Ensure all vents are clear of furniture, rugs, or debris. Clean vent covers to improve airflow.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">3. Test Thermostat Operation</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Check that your thermostat responds correctly and consider upgrading to a programmable model for energy savings.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">4. Check Safety Features</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Test carbon monoxide detectors and ensure all safety switches are functioning properly.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">5. Schedule Professional Inspection</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Annual professional maintenance includes checking gas connections, cleaning heat exchangers, and calibrating controls.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Warning Signs Your Furnace Needs Attention</h2>
        <ul class="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
          <li>Unusual noises (banging, squealing, or rumbling)</li>
          <li>Inconsistent heating throughout your home</li>
          <li>Yellow flame instead of blue (gas furnaces)</li>
          <li>Increased energy bills without increased usage</li>
          <li>Frequent cycling on and off</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Professional Maintenance Benefits</h2>
        <p class="text-gray-700 leading-relaxed">Our certified technicians can identify potential issues before they become costly repairs, ensuring your Kamloops home stays warm all winter long.</p>
      `,
      date: '2024-10-28',
      category: 'Heating',
      readTime: '7 min read',
      metaDescription: 'Complete furnace maintenance guide for Kamloops homeowners. Keep your heating system efficient and reliable all winter long.',
    },
    'gas-line-safety-kamloops-homes': {
      title: 'Gas Line Safety: What Every Kamloops Homeowner Should Know',
      content: `
        <p class="text-gray-700 text-lg leading-relaxed mb-6">Gas lines provide efficient energy for heating, cooking, and hot water in Kamloops homes. Understanding gas line safety is crucial for protecting your family and property.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Understanding Your Home's Gas System</h2>
        <p class="text-gray-700 leading-relaxed mb-6">Most Kamloops homes use natural gas supplied through underground lines. These systems are generally safe when properly installed and maintained, but require awareness and regular inspection.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Critical Safety Signs to Watch For</h2>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Smell</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Natural gas has a distinctive "rotten egg" smell. If you detect this odor inside or outside your home, take immediate action.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Sound</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Hissing sounds near gas appliances or meters may indicate a leak.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Sight</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Dead vegetation near gas lines, dirt or dust blowing from underground, or white/dusty mist near gas lines are warning signs.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">What to Do If You Suspect a Gas Leak</h2>
        <ol class="list-decimal list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
          <li>Leave the area immediately</li>
          <li>Don't use electrical switches, phones, or create sparks</li>
          <li>Call your gas company from a safe location</li>
          <li>Don't return until professionals declare it safe</li>
        </ol>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Prevention and Maintenance</h2>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Regular Inspections</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Have gas lines and appliances inspected annually by certified professionals.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Proper Installation</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Only use licensed gas fitters for new installations or modifications.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Appliance Maintenance</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Keep gas appliances clean and properly ventilated.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">When to Call Professionals</h2>
        <p class="text-gray-700 leading-relaxed">Never attempt DIY gas line repairs. Our licensed gas fitters in Kamloops ensure safe, code-compliant installations and repairs.</p>
      `,
      date: '2024-10-15',
      category: 'Gas Fitting',
      readTime: '6 min read',
      metaDescription: 'Essential gas line safety tips for Kamloops homeowners. Learn warning signs, prevention tips, and when to call professionals.',
    },
    'thermostat-upgrade-energy-savings': {
      title: 'Smart Thermostat Installation: Save Money on Kamloops Energy Bills',
      content: `
        <p class="text-gray-700 text-lg leading-relaxed mb-6">Smart thermostats are revolutionizing how Kamloops homeowners manage their heating and cooling costs. These intelligent devices can significantly reduce energy consumption while improving comfort.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Benefits of Smart Thermostats in Kamloops</h2>
        <p class="text-gray-700 leading-relaxed mb-6">With Kamloops' variable climate, smart thermostats adapt to seasonal changes, learning your schedule and preferences to optimize energy usage throughout the year.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Features That Save Money</h2>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Programmable Schedules</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Set different temperatures for when you're home, away, or sleeping. Reduce heating/cooling when not needed.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Learning Capability</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Advanced models learn your habits and adjust automatically, eliminating the need for manual programming.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">3. Remote Control</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Adjust temperature from anywhere using smartphone apps. Perfect for unexpected schedule changes.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">4. Energy Reports</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Track usage patterns and receive tips for additional savings.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">5. Geofencing</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Automatically adjust temperature based on your location - energy savings when you're away from home.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Installation Considerations</h2>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Compatibility Check</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Ensure your HVAC system is compatible with smart thermostat technology.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Professional Installation</h3>
        <p class="text-gray-700 leading-relaxed mb-4">While some models are DIY-friendly, professional installation ensures optimal performance and warranty protection.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">WiFi Requirements</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Reliable internet connection needed for remote features and updates.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Expected Savings</h2>
        <p class="text-gray-700 leading-relaxed mb-4">Kamloops homeowners typically see 10-23% reduction in heating and cooling costs, with payback periods of 1-2 years.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Professional Installation Service</h2>
        <p class="text-gray-700 leading-relaxed">Our certified technicians provide expert smart thermostat installation and setup, ensuring you maximize energy savings from day one.</p>
      `,
      date: '2024-09-30',
      category: 'HVAC',
      readTime: '4 min read',
      metaDescription: 'Save money on energy bills with smart thermostat installation in Kamloops. Learn about features, benefits, and expected savings.',
    },
    'summer-ac-maintenance-kamloops': {
      title: 'Beat the Heat: Summer AC Maintenance for Kamloops Homes',
      content: `
        <p class="text-gray-700 text-lg leading-relaxed mb-6">While Kamloops summers are generally mild, hot spells can make air conditioning essential for comfort. Proper maintenance ensures your AC system runs efficiently when you need it most.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Why AC Maintenance Matters in Kamloops</h2>
        <p class="text-gray-700 leading-relaxed mb-6">Even with moderate summer temperatures, high humidity and occasional heat waves make air conditioning valuable. Well-maintained systems provide better air quality and energy efficiency.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Essential Summer Maintenance Tasks</h2>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Clean or Replace Air Filters</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Dirty filters restrict airflow and reduce efficiency. Check monthly during heavy use periods.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Clear Outdoor Unit</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Remove debris, leaves, and vegetation from around the condenser unit. Maintain 2-foot clearance on all sides.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">3. Clean Condenser Coils</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Use garden hose to gently clean dirt and debris from outdoor coils. Turn off power first.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">4. Check Refrigerant Lines</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Inspect insulation on refrigerant lines. Replace damaged insulation to maintain efficiency.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">5. Test Thermostat Operation</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Ensure accurate temperature readings and proper system cycling.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Professional Maintenance Benefits</h2>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Complete System Inspection</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Professionals check refrigerant levels, electrical connections, and component wear.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Preventive Repairs</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Identify potential issues before they become costly breakdowns during hot weather.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Efficiency Optimization</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Calibrate system for peak performance and energy savings.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Signs Your AC Needs Professional Attention</h2>
        <ul class="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
          <li>Weak airflow from vents</li>
          <li>Warm air instead of cool</li>
          <li>Unusual noises or odors</li>
          <li>Frequent cycling on and off</li>
          <li>High humidity indoors</li>
          <li>Ice formation on unit</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Emergency Preparedness</h2>
        <p class="text-gray-700 leading-relaxed">Have our contact information ready for emergency AC repairs during Kamloops heat waves. Quick service restores comfort and prevents further damage.</p>
      `,
      date: '2024-06-10',
      category: 'Cooling',
      readTime: '5 min read',
      metaDescription: 'Keep your AC running efficiently during Kamloops summer. Essential maintenance tips and professional service benefits.',
    },
    'gas-fireplace-spring-startup-kamloops': {
      title: 'Gas Fireplace Spring Startup: Safety and Maintenance Guide',
      content: `
        <p class="text-gray-700 text-lg leading-relaxed mb-6">As spring arrives in Kamloops, it's time to properly maintain and prepare your gas fireplace for the off-season. Proper spring maintenance ensures safety and optimal performance when cold weather returns.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Spring Maintenance Matters</h2>
        <p class="text-gray-700 leading-relaxed mb-6">After a winter of regular use, gas fireplaces need thorough cleaning and inspection. Spring maintenance also prepares the system for months of non-use, preventing issues when you restart in fall.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Spring Shutdown Checklist</h2>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Turn Off Gas Supply</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Locate and turn off the gas shut-off valve to your fireplace. This prevents gas flow during maintenance and storage.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Clean Glass Doors</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Use appropriate glass cleaner to remove soot and residue. Clean glass improves efficiency and appearance.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">3. Remove Decorative Elements</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Clean and store decorative logs, rocks, or other elements in a dry location to prevent deterioration.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">4. Inspect Burner and Controls</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Check for corrosion, debris, or damage to burner ports and control mechanisms.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Chimney and Venting Maintenance</h2>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Check Chimney Cap</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Ensure the chimney cap is secure and screens are intact to prevent animal entry during off-season.</p>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Inspect Venting System</h3>
        <p class="text-gray-700 leading-relaxed mb-4">Look for blockages, damage, or disconnected joints in the venting system.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Professional Inspection Benefits</h2>
        <ul class="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
          <li>Gas line pressure testing</li>
          <li>Thermocouple and safety system checks</li>
          <li>Carbon monoxide testing</li>
          <li>Comprehensive component inspection</li>
          <li>Performance optimization</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Warning Signs During Use</h2>
        <ul class="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
          <li>Yellow or orange flames instead of blue</li>
          <li>Unusual odors when operating</li>
          <li>Excessive condensation on glass</li>
          <li>Difficulty starting or maintaining flame</li>
          <li>Soot buildup around the unit</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Fall Restart Preparation</h2>
        <p class="text-gray-700 leading-relaxed mb-4">Before using your fireplace again in fall, have it professionally inspected and serviced to ensure safe operation.</p>
        
        <p class="text-gray-700 leading-relaxed">Our certified gas technicians provide complete fireplace maintenance and safety inspections for Kamloops homeowners year-round.</p>
      `,
      date: '2024-05-18',
      category: 'Gas Fitting',
      readTime: '4 min read',
      metaDescription: 'Essential gas fireplace spring maintenance guide for Kamloops homeowners. Ensure safety and performance with proper seasonal care.',
    }
  };
  
  return posts[slug] || null;
};

// Fix for Next.js 15: Make params and searchParams async
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Kamloops Plumbing Blog`,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: 'article',
    },
  };
}

export default async function BlogPost({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 text-sm font-medium">
              {post.category}
            </span>
            <span className="text-gray-500 text-sm">{post.readTime}</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center text-gray-600">
            <span>Published on {new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
        </header>

        {/* Article Content - Fully Styled */}
        <div 
          className="max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA Section */}
        <div className="mt-12 bg-blue-50 p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Professional Plumbing Help in Kamloops?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our experienced team is ready to help with all your plumbing, heating, cooling, and gas fitting needs.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 font-semibold hover:bg-blue-700 transition-colors">
            Contact Us Today
          </button>
        </div>

        {/* Back to Blog */}
        <div className="mt-8 text-center">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-medium">
            ← Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
}