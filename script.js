// ============ PRODUCT DATA ============
const products = [
    {
        name: "KRISMOX Eye Drop",
        category: "Antibiotic Eye Drop",
        labelClass: "label-blue",
        labelText: "KRIS\nMOX",
        mrp: "₹120",
        image: "img/KRISMOX Eye Drop.png",
        composition: "Moxifloxacin Hydrochloride 0.5% w/v",
        description: "KRISMOX Eye Drop contains Moxifloxacin Hydrochloride 0.5%, a fourth-generation fluoroquinolone antibiotic with potent bactericidal activity. It is indicated for the treatment of bacterial conjunctivitis, corneal ulcers, and other external ocular infections caused by susceptible organisms.",
        benefits: [
            "Broad-spectrum bactericidal activity against gram-positive & gram-negative bacteria",
            "Rapid onset of action with excellent ocular penetration",
            "Low risk of developing bacterial resistance",
            "Well-tolerated with minimal stinging on instillation",
            "Effective against common ocular pathogens including S. aureus, S. pneumoniae, and H. influenzae"
        ],
        usage: "As prescribed by ophthalmologist. Typically 1-2 drops in the affected eye(s) 3 times daily for 7 days or as directed.",
        size: "Available as Eye Drop"
    },
    {
        name: "KRISMOX T Eye Drop",
        category: "Combination Antibiotic Eye Drop",
        labelClass: "label-teal",
        labelText: "KRIS\nMOX T",
        mrp: "₹140",
        image: "img/KRISMOX T Eye Drop.png",
        composition: "Moxifloxacin Hydrochloride 0.5% w/v + Tobramycin Sulphate 0.3%",
        description: "KRISMOX T Eye Drop is a powerful dual-antibiotic formulation combining Moxifloxacin Hydrochloride with Tobramycin Sulphate. This synergistic combination provides enhanced broad-spectrum coverage against both gram-positive and gram-negative bacteria, making it ideal for severe or resistant ocular infections.",
        benefits: [
            "Dual antibiotic synergy for enhanced bactericidal coverage",
            "Moxifloxacin covers gram-positive organisms while Tobramycin targets gram-negative",
            "Ideal for severe conjunctivitis and mixed infections",
            "Reduced risk of resistance development due to dual mechanism",
            "Effective in empirical therapy before culture results are available"
        ],
        usage: "As prescribed by ophthalmologist. Typically 1-2 drops in the affected eye(s) every 4-6 hours or as directed.",
        size: "Available as Eye Drop"
    },
    {
        name: "CLERTEAR Eye Drop",
        category: "Lubricating Eye Drop",
        labelClass: "label-green",
        labelText: "CLER\nTEAR",
        mrp: "₹130",
        image: "img/CLERTEAR Eye Drop.png",
        composition: "Carboxymethylcellulose Sodium 0.5% w/v",
        description: "CLERTEAR Eye Drop contains Carboxymethylcellulose Sodium 0.5%, a premium lubricating agent that mimics natural tears to provide instant moisture and comfort. It is ideal for dry eye syndrome, computer vision syndrome, contact lens-related dryness, and post-surgical dryness.",
        benefits: [
            "Instant and sustained moisture relief for dry, irritated eyes",
            "Mimics the natural tear film composition for superior comfort",
            "Safe for daily use with contact lenses",
            "Reduces friction between eyelids and corneal surface",
            "Suitable for post-LASIK and post-cataract surgery dryness"
        ],
        usage: "Instill 1-2 drops in each eye 3-4 times daily or as needed. Can be used more frequently if required.",
        size: "Available as Eye Drop"
    },
    {
        name: "CLERTEAR GEL Eye Drop",
        category: "Lubricating Gel Eye Drop",
        labelClass: "label-cyan",
        labelText: "CLER\nGEL",
        mrp: "₹170",
        image: "img/CLERTEAR GEL Eye Drop.png",
        composition: "Carboxymethylcellulose 1% w/v",
        description: "CLERTEAR GEL Eye Drop is a high-viscosity gel-based lubricant containing Carboxymethylcellulose 1% — double the concentration of regular CLERTEAR. The gel formula provides prolonged contact time on the ocular surface, making it ideal for severe dry eye conditions and overnight eye protection.",
        benefits: [
            "Double concentration (1% CMC) for severe dry eye relief",
            "Extended moisture retention up to 8 hours",
            "Ideal for nighttime use to prevent overnight corneal drying",
            "Gel consistency provides superior ocular surface coating",
            "Protects against environmental irritants like wind, dust, and AC"
        ],
        usage: "Apply 1-2 drops in each eye 2-3 times daily or before bedtime. May cause temporary blurring upon application which clears within minutes.",
        size: "Available as Gel Eye Drop"
    },
    {
        name: "KRISMOX KT Eye Drop",
        category: "Antibiotic + NSAID Combination",
        labelClass: "label-orange",
        labelText: "KRIS\nKT",
        mrp: "₹130",
        image: "img/KRISMOX KT Eye Drop.png",
        composition: "Moxifloxacin Hydrochloride 0.5% w/v + Ketorolac Tromethamine 0.5% w/v",
        description: "KRISMOX KT Eye Drop combines the powerful antibiotic Moxifloxacin with the NSAID Ketorolac Tromethamine, providing dual-action therapy against both infection and inflammation. It is especially effective for post-operative ocular care and infected inflammatory eye conditions.",
        benefits: [
            "Dual action: fights infection + reduces inflammation simultaneously",
            "Ideal for post-cataract and post-refractive surgery management",
            "Ketorolac provides effective pain relief and reduces CME risk",
            "Moxifloxacin prevents post-surgical bacterial infections",
            "Convenient single-bottle combination reduces patient compliance burden"
        ],
        usage: "As prescribed by ophthalmologist. Typically 1-2 drops in the affected eye(s) 3-4 times daily starting 24 hours before surgery and continuing for 2-4 weeks post-surgery.",
        size: "Available as Eye Drop"
    },
    {
        name: "GATRITY Eye Drop",
        category: "Antibiotic Eye Drop",
        labelClass: "label-purple",
        labelText: "GAT\nRITY",
        mrp: "₹140",
        image: "img/GATRITY Eye Drop.png",
        composition: "Gatifloxacin 0.5% w/v",
        description: "GATRITY Eye Drop contains Gatifloxacin 0.5%, an advanced fourth-generation fluoroquinolone antibiotic with a unique dual mechanism of action targeting both DNA gyrase and topoisomerase IV. This provides superior bactericidal activity and excellent ocular tissue penetration.",
        benefits: [
            "Fourth-generation fluoroquinolone with dual mechanism of action",
            "Superior penetration into ocular tissues including aqueous humor",
            "Effective against atypical organisms and resistant bacterial strains",
            "Low propensity for developing bacterial resistance",
            "Well-suited for pre-operative prophylaxis and post-operative infection prevention"
        ],
        usage: "As prescribed by ophthalmologist. Typically 1 drop in the affected eye(s) every 2 hours while awake for 2 days, then 4 times daily for 5 additional days.",
        size: "Available as Eye Drop"
    },
    {
        name: "CLERTEAR ULTRA Eye Drop",
        category: "Advanced Lubricating Eye Drop",
        labelClass: "label-indigo",
        labelText: "CLER\nULTRA",
        mrp: "₹240",
        image: "img/CLERTEAR ULTRA Eye Drop.png",
        composition: "Polyethylene Glycol (400) USP 0.4% w/v + Propylene Glycol 0.3% w/v",
        description: "CLERTEAR ULTRA is the premium offering in the CLERTEAR range, featuring a dual-polymer lubricating system with Polyethylene Glycol 400 and Propylene Glycol. This advanced formulation provides superior tear film stabilization and extended ocular surface protection for moderate to severe dry eye conditions.",
        benefits: [
            "Dual-polymer system for multi-layered tear film protection",
            "PEG 400 stabilizes the aqueous layer while Propylene Glycol reinforces the lipid layer",
            "Advanced formula mimics all three layers of natural tears",
            "Long-lasting comfort for extended screen time and environmental exposure",
            "Premium grade formulation for patients not responding to standard lubricants"
        ],
        usage: "Instill 1-2 drops in each eye as needed throughout the day. Safe for frequent daily use. Compatible with contact lenses.",
        size: "Available as Eye Drop"
    },
    {
        name: "KRISTIGEM Capsule",
        category: "Eye Health Nutraceutical Supplement",
        labelClass: "label-brown",
        labelText: "KRISTI\nGEM",
        mrp: "₹220 per strip",
        image: "img/KRISTIGEM Capsule.png",
        composition: "Omega-3 Fatty Acid (18:12) 500mg + Eicosapentaenoic Acid (EPA) 90mg + Docosahexaenoic Acid (DHA) 60mg + Lutein 10% 10mg + Astaxanthin 10% 2mg + Zeaxanthin 10% 2mg",
        description: "KRISTIGEM Capsule is a comprehensive eye health nutraceutical containing a scientifically balanced blend of Omega-3 Fatty Acids, Lutein, Zeaxanthin, and Astaxanthin. This powerful combination supports retinal health, protects against age-related macular degeneration (AMD), filters harmful blue light, and provides potent antioxidant protection for overall ocular wellness.",
        benefits: [
            "Omega-3 (EPA & DHA) supports retinal cell membrane integrity and tear film production",
            "Lutein 10mg filters harmful blue light and protects the macula",
            "Zeaxanthin 2mg enhances macular pigment density for sharper vision",
            "Astaxanthin 2mg provides 6000x more antioxidant power than Vitamin C",
            "Comprehensive formula for AMD prevention, diabetic retinopathy support, and digital eye strain",
            "Supports meibomian gland function to reduce dry eye symptoms"
        ],
        usage: "Take 1 capsule daily with meals or as directed by your physician. For best results, use continuously for at least 3-6 months.",
        size: "Available in capsule strip format",
        isCapsule: true
    }
];

// ============ OPEN PRODUCT MODAL ============
function openModal(index) {
    const product = products[index];
    const modal = document.getElementById('productModal');
    const body = document.getElementById('modalBody');

    if (!modal || !body) return;

    let imageHTML = `
        <div class="modal-product-image" style="${product.isCapsule ? 'background:linear-gradient(135deg,#FFF3E0,#FFE0B2);' : ''}">
            <img src="${product.image}" alt="${product.name}" class="modal-img">
        </div>
    `;

    body.innerHTML = `
        ${imageHTML}
        <div class="modal-product-category">${product.category}</div>
        <h2 class="modal-product-name">${product.name}</h2>
        <div class="modal-mrp">MRP: ${product.mrp}</div>
        <p class="modal-product-desc">${product.description}</p>
        <div class="modal-section">
            <h4>🧪 Composition</h4>
            <p style="color:var(--text-medium);font-size:0.95rem;font-weight:600;background:var(--soft-blue);padding:12px 16px;border-radius:8px">${product.composition}</p>
        </div>
        <div class="modal-section">
            <h4>✅ Key Benefits</h4>
            <ul>${product.benefits.map(b => '<li>' + b + '</li>').join('')}</ul>
        </div>
        <div class="modal-section">
            <h4>💧 Dosage & Usage</h4>
            <p style="color:var(--text-medium);font-size:0.95rem">${product.usage}</p>
        </div>
        <div class="modal-section">
            <h4>📦 Pack Size</h4>
            <p style="color:var(--text-medium);font-size:0.95rem">${product.size}</p>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ============ CLOSE MODAL ============
function closeModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close modal on overlay click
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === this) closeModal();
        });
    }
});

// Close modal on Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
});

// ============ MOBILE NAVIGATION ============
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// ============ NAVBAR SCROLL EFFECT ============
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');

    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    if (backToTop) {
        if (window.scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
});

// ============ FAQ TOGGLE ============
function toggleFaq(element) {
    const faqItem = element.parentElement;
    const wasActive = faqItem.classList.contains('active');

    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });

    if (!wasActive) {
        faqItem.classList.add('active');
    }
}

// ============ PRODUCT FILTER ============
function filterProducts(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    if (event && event.target) {
        event.target.classList.add('active');
    }

    document.querySelectorAll('.product-card').forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = '';
            card.style.animation = 'fadeIn 0.5s ease';
        } else {
            card.style.display = 'none';
        }
    });
}

// ============ CONTACT FORM HANDLER ============
function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    if (btn) {
        const originalText = btn.innerHTML;
        btn.innerHTML = '✓ Message Sent Successfully!';
        btn.style.background = 'linear-gradient(135deg, var(--primary-green), var(--primary-green-light))';

        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
            e.target.reset();
        }, 3000);
    }
}

// ============ SCROLL ANIMATIONS ============
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// ============ SMOOTH SCROLL FOR SAME-PAGE ANCHORS ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const offset = 80;
            const position = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: position, behavior: 'smooth' });
        }
    });
});