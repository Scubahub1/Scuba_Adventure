module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/components/ui/SectionTitle.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const SectionTitle = ({ title, subtitle, align = 'center', light = false })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: `text-3xl md:text-5xl font-bold font-display tracking-tight mb-4 ${light ? 'text-white' : 'text-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-sky-300 dark:to-teal-300'}`,
                children: title
            }, void 0, false, {
                fileName: "[project]/components/ui/SectionTitle.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `text-lg max-w-2xl leading-relaxed ${align === 'center' ? 'mx-auto' : ''} ${light ? 'text-slate-300' : 'text-slate-600 dark:text-slate-300'}`,
                children: subtitle
            }, void 0, false, {
                fileName: "[project]/components/ui/SectionTitle.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `h-1 w-24 bg-ocean-500 rounded-full mt-6 ${align === 'center' ? 'mx-auto' : ''}`
            }, void 0, false, {
                fileName: "[project]/components/ui/SectionTitle.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/SectionTitle.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = SectionTitle;
}),
"[project]/components/ui/Button.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
const Button = ({ children, variant = "primary", href, className = "", onClick, type = "button" })=>{
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg text-sm md:text-base cursor-pointer relative overflow-hidden group";
    const variants = {
        primary: "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-blue-500/40 hover:shadow-cyan-400/60 hover:-translate-y-1 hover:scale-105",
        secondary: "bg-gradient-to-r from-teal-600 to-emerald-500 hover:from-teal-500 hover:to-emerald-400 text-white shadow-teal-600/40 hover:shadow-emerald-500/60 hover:-translate-y-1 hover:scale-105",
        outline: "border-2 border-cyan-400/60 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-300 hover:text-white backdrop-blur-sm hover:shadow-cyan-400/30",
        gradient: "bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white shadow-cyan-500/50 hover:shadow-teal-400/60 hover:-translate-y-1 animate-gradient",
        glow: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50 hover:shadow-cyan-400/80 hover:shadow-2xl hover:-translate-y-1 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
    };
    const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;
    if (href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            className: combinedClasses,
            onClick: onClick,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "relative z-10",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ui/Button.tsx",
                lineNumber: 45,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/ui/Button.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: type,
        className: combinedClasses,
        onClick: onClick,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "relative z-10",
            children: children
        }, void 0, false, {
            fileName: "[project]/components/ui/Button.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/Button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Button;
}),
"[project]/data/mockData.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blogPosts",
    ()=>blogPosts,
    "courses",
    ()=>courses,
    "diveProcess",
    ()=>diveProcess,
    "equipment",
    ()=>equipment,
    "experiences",
    ()=>experiences,
    "faqs",
    ()=>faqs,
    "packages",
    ()=>packages,
    "teamMembers",
    ()=>teamMembers,
    "testimonials",
    ()=>testimonials
]);
const experiences = [
    {
        slug: "stay-rooms-netrani",
        title: "Rooms Available",
        shortDescription: "Comfortable rooms to relax before and after your adventure.",
        image: "https://images.pexels.com/photos/17432312/pexels-photo-17432312.jpeg"
    },
    {
        slug: "cab-services-netrani",
        title: "Cab Services Available",
        shortDescription: "Comfortable cab transfers to ensure a smooth and stress-free journey.",
        image: "https://images.pexels.com/photos/7598015/pexels-photo-7598015.jpeg"
    }
];
const courses = [
    {
        slug: "open-water-course",
        title: "PADI Open Water Diver",
        level: "Beginner Certification",
        duration: "4 Days",
        price: "₹24,000",
        description: "The world’s most popular scuba course. Get certified to dive anywhere in the world up to 18 meters.",
        image: "https://picsum.photos/id/54/800/600",
        curriculum: [
            "Knowledge Development (eLearning)",
            "Confined Water Dives (Pool training)",
            "4 Open Water Dives at Netrani",
            "Final Exam & Certification"
        ]
    },
    {
        slug: "advanced-open-water",
        title: "PADI Advanced Open Water",
        level: "Continuing Education",
        duration: "2-3 Days",
        price: "₹22,000",
        description: "Explore new environments and go deeper. Includes Deep Dive and Navigation Dive plus 3 specialties.",
        image: "https://picsum.photos/id/192/800/600",
        curriculum: [
            "Deep Dive (up to 30m)",
            "Underwater Navigation",
            "Peak Performance Buoyancy",
            "Fish Identification",
            "Boat Diving"
        ]
    },
    {
        slug: "rescue-diver",
        title: "PADI Rescue Diver",
        level: "Pro Preparation",
        duration: "3-4 Days",
        price: "₹26,000",
        description: "Learn to prevent and manage problems in the water. Serious fun.",
        image: "https://picsum.photos/id/184/800/600",
        curriculum: [
            "Self Rescue",
            "Rescuing Panicked Divers",
            "Unresponsive Diver Underwater",
            "Emergency Management"
        ]
    }
];
const packages = [
    {
        id: "beginner-bliss",
        title: "Netrani Beginner Bliss",
        subtitle: "Try Scuba + Temple Visit",
        price: "₹6,500",
        duration: "2 Days",
        inclusions: [
            "Discover Scuba Diving (2 Dives)",
            "Hotel Stay (1 Night)",
            "Temple Visit Assistance",
            "Breakfast"
        ],
        recommendedFor: "First Timers"
    },
    {
        id: "certification-camp",
        title: "Zero to Hero",
        subtitle: "Open Water Certification",
        price: "₹28,000",
        duration: "4 Days / 3 Nights",
        inclusions: [
            "PADI Open Water Course",
            "Accommodation (3 Nights)",
            "Learning Materials",
            "Logbook"
        ],
        recommendedFor: "Aspiring Divers"
    },
    {
        id: "pro-diver-weekend",
        title: "Pro Diver Weekend",
        subtitle: "6 Dives Package",
        price: "₹12,000",
        duration: "3 Days",
        inclusions: [
            "6 Boat Dives",
            "Nitrox (Optional)",
            "Equipment Rental",
            "Lunch on Boat"
        ],
        recommendedFor: "Certified Divers"
    }
];
const testimonials = [
    {
        id: 1,
        name: "Aarav Sharma",
        role: "Open Water Diver",
        quote: "Netrani Island is unbelievable. The visibility was 20 meters! Scuba Hub made me feel so safe during my first course.",
        rating: 5,
        avatar: "https://picsum.photos/id/64/100/100"
    },
    {
        id: 2,
        name: "Sarah Jenkins",
        role: "Travel Blogger",
        quote: "I have dived in Thailand and Bali, but the fish life at Netrani rivals them all. The Scuba Hub team is world-class.",
        rating: 5,
        avatar: "https://picsum.photos/id/65/100/100"
    },
    {
        id: 3,
        name: "Rahul & Priya",
        role: "Couple Divers",
        quote: "We did the Discover Scuba package. The instructors held our hands the whole time. Best experience of our lives!",
        rating: 5,
        avatar: "https://picsum.photos/id/91/100/100"
    }
];
const faqs = [
    {
        question: "Do I need to know how to swim to scuba dive?",
        answer: 'For the "Discover Scuba Diving" experience at Netrani, swimming is NOT required. However, for certification courses like the Open Water Diver, basic swimming skills are mandatory.'
    },
    {
        question: "What is the best time to visit Netrani Island?",
        answer: "The diving season at Netrani runs from October to May. The clearest water is usually found between December and March."
    },
    {
        question: "How do we reach Netrani Island?",
        answer: "Our dives operate from Murudeshwar. We take a 75-90 minute boat ride from the Murudeshwar temple jetty to reach the island."
    },
    {
        question: "Is it safe for kids?",
        answer: "Yes! Kids aged 10 and above can participate in scuba diving. We have special gear and instructors trained to work with children."
    }
];
const blogPosts = [
    {
        slug: "beginners-guide-netrani",
        title: "Beginner’s Guide to Scuba Diving at Netrani Island",
        excerpt: "Everything you need to know before taking your first plunge into the Arabian Sea.",
        date: "March 15, 2024",
        category: "Guides",
        coverImage: "https://picsum.photos/id/119/800/600"
    },
    {
        slug: "marine-life-netrani",
        title: "5 Marine Creatures You Will See at Netrani",
        excerpt: "From Bannerfish to Moray Eels, discover the biodiversity of Karnataka’s coral reef.",
        date: "February 20, 2024",
        category: "Marine Life",
        coverImage: "https://picsum.photos/id/162/800/600"
    }
];
const teamMembers = [
    {
        name: "Rajesh Kumar",
        role: "Lead Instructor",
        certification: "PADI MSDT",
        experience: "12 Years",
        image: "https://picsum.photos/id/237/400/400"
    },
    {
        name: "Anita Desai",
        role: "Dive Master",
        certification: "PADI Divemaster",
        experience: "5 Years",
        image: "https://picsum.photos/id/238/400/400"
    }
];
const diveProcess = [
    {
        title: "Briefing",
        description: "Safety checks, hand signals, and site map overview.",
        icon: "📋"
    },
    {
        title: "Gear Up",
        description: "Fitting masks, fins, and wetsuits at the dive shop.",
        icon: "🤿"
    },
    {
        title: "Boat Ride",
        description: "90 min scenic ride from Murudeshwar to Netrani.",
        icon: "🚤"
    },
    {
        title: "The Dive",
        description: "Descend into the blue with your instructor.",
        icon: "🐠"
    },
    {
        title: "Snorkelling",
        description: "Explore marine life with mask and snorkel.",
        icon: "🏊‍♂️"
    }
];
const equipment = [
    {
        name: "Go Pro 13 Camera",
        image: "https://images.pexels.com/photos/37545/diver-scuba-scuba-diving-regulator-37545.jpeg",
        desc: "Balanced airflow for smooth breathing underwater"
    },
    {
        name: "BCD Jacket",
        image: "https://images.pexels.com/photos/90454/pexels-photo-90454.jpeg",
        desc: "Integrated weights and secure buoyancy control"
    },
    {
        name: "Tank & Cylinder",
        image: "https://images.pexels.com/photos/37536/diver-scuba-tank-cylinder-37536.jpeg",
        desc: "High-pressure aluminum cylinder for extended air supply"
    },
    {
        name: "Dive Computer",
        image: "https://images.pexels.com/photos/1806950/pexels-photo-1806950.jpeg",
        desc: "Real-time depth, time & safety tracking"
    },
    {
        name: "Wetsuit",
        image: "https://images.pexels.com/photos/3851387/pexels-photo-3851387.jpeg",
        desc: "3mm neoprene thermal protection"
    },
    {
        name: "Fins",
        image: "https://images.pexels.com/photos/37526/diver-scuba-snorkel-swimming-37526.jpeg",
        desc: "Powerful propulsion with minimal effort"
    },
    {
        name: "Dive Mask",
        image: "https://images.pexels.com/photos/37547/diver-scuba-equipment-mask-37547.jpeg",
        desc: "Anti-fog tempered glass & wide vision"
    },
    {
        name: "Snorkel Tube",
        image: "https://images.pexels.com/photos/532803/pexels-photo-532803.jpeg",
        desc: "Dry-top valve for comfortable surface breathing"
    },
    {
        name: "Weight Belt",
        image: "https://images.pexels.com/photos/90449/pexels-photo-90449.jpeg",
        desc: "Lead weights for buoyancy fine-tuning"
    }
];
}),
"[project]/app/packages/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PackagesPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SectionTitle$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/SectionTitle.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mockData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/mockData.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const metadata = {
    title: "Dive Packages | Scuba Hub Adventures",
    description: "All-inclusive dive packages at Netrani Island including accommodation and gear."
};
function PackagesPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-c21cbb298a0e5551" + " " + "min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-c21cbb298a0e5551" + " " + "absolute inset-0 overflow-hidden pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-c21cbb298a0e5551" + " " + "absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/app/packages/page.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-c21cbb298a0e5551" + " " + "absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"
                    }, void 0, false, {
                        fileName: "[project]/app/packages/page.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-c21cbb298a0e5551" + " " + "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/app/packages/page.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/packages/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-c21cbb298a0e5551" + " " + "pt-32 pb-20 container mx-auto px-4 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SectionTitle$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        title: "Netrani Dive Packages",
                        subtitle: "Hassle-free packages including accommodation, logistics, and diving."
                    }, void 0, false, {
                        fileName: "[project]/app/packages/page.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-c21cbb298a0e5551" + " " + "grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-16",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mockData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["packages"].map((pkg, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    animation: `fadeInUp 0.6s ease-out ${idx * 0.15}s both`
                                },
                                className: "jsx-c21cbb298a0e5551" + " " + `rounded-3xl p-8 flex flex-col relative transform transition-all duration-500 hover:scale-105 ${idx === 1 ? "bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900 border-2 border-cyan-400/50 shadow-2xl shadow-cyan-500/30 md:-mt-4 md:mb-4" : "bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/30"}`,
                                children: [
                                    idx === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-c21cbb298a0e5551" + " " + "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-c21cbb298a0e5551" + " " + "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-c21cbb298a0e5551" + " " + "absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-lg opacity-70 animate-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/packages/page.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-c21cbb298a0e5551" + " " + "relative bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold px-6 py-2 rounded-full uppercase tracking-wider shadow-lg",
                                                    children: "⭐ Most Popular"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/packages/page.tsx",
                                                    lineNumber: 47,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/packages/page.tsx",
                                            lineNumber: 45,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/packages/page.tsx",
                                        lineNumber: 44,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-c21cbb298a0e5551" + " " + "mb-6 mt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-c21cbb298a0e5551" + " " + `text-3xl font-bold mb-2 ${idx === 1 ? "bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent" : "text-white"}`,
                                                children: pkg.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/packages/page.tsx",
                                                lineNumber: 56,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-c21cbb298a0e5551" + " " + "text-slate-400 text-sm leading-relaxed",
                                                children: pkg.subtitle
                                            }, void 0, false, {
                                                fileName: "[project]/app/packages/page.tsx",
                                                lineNumber: 65,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/packages/page.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-c21cbb298a0e5551" + " " + "mb-8 relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-c21cbb298a0e5551" + " " + `inline-block ${idx === 1 ? "relative" : ""}`,
                                                children: [
                                                    idx === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-c21cbb298a0e5551" + " " + "absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/packages/page.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-c21cbb298a0e5551" + " " + `text-5xl font-bold relative ${idx === 1 ? "bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent" : "text-white"}`,
                                                        children: pkg.price
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/packages/page.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/packages/page.tsx",
                                                lineNumber: 72,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-c21cbb298a0e5551" + " " + "text-slate-500 text-sm block mt-2",
                                                children: pkg.duration
                                            }, void 0, false, {
                                                fileName: "[project]/app/packages/page.tsx",
                                                lineNumber: 86,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/packages/page.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-c21cbb298a0e5551" + " " + `h-px mb-8 ${idx === 1 ? "bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" : "bg-gradient-to-r from-transparent via-slate-700 to-transparent"}`
                                    }, void 0, false, {
                                        fileName: "[project]/app/packages/page.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "jsx-c21cbb298a0e5551" + " " + "space-y-4 mb-8 flex-grow",
                                        children: pkg.inclusions.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "jsx-c21cbb298a0e5551" + " " + "flex items-start gap-3 text-slate-300 text-sm group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-c21cbb298a0e5551" + " " + `mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs transition-all ${idx === 1 ? "bg-gradient-to-br from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30" : "bg-teal-500/20 text-teal-400 group-hover:bg-teal-500/30"}`,
                                                        children: "✓"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/packages/page.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-c21cbb298a0e5551" + " " + "leading-relaxed",
                                                        children: item
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/packages/page.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/app/packages/page.tsx",
                                                lineNumber: 103,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/packages/page.tsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-c21cbb298a0e5551" + " " + "mt-auto pt-6 border-t border-slate-700/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-c21cbb298a0e5551" + " " + "text-center text-sm text-slate-400 mb-4 flex items-center justify-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-c21cbb298a0e5551" + " " + "text-slate-500",
                                                        children: "Best for:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/packages/page.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-c21cbb298a0e5551" + " " + `font-semibold ${idx === 1 ? "text-cyan-400" : "text-slate-300"}`,
                                                        children: pkg.recommendedFor
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/packages/page.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/packages/page.tsx",
                                                lineNumber: 123,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/book",
                                                variant: idx === 1 ? "glow" : "outline",
                                                className: "w-full",
                                                children: idx === 1 ? "Choose Popular Plan" : "Select Package"
                                            }, void 0, false, {
                                                fileName: "[project]/app/packages/page.tsx",
                                                lineNumber: 133,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/packages/page.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, pkg.id, true, {
                                fileName: "[project]/app/packages/page.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/packages/page.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-c21cbb298a0e5551" + " " + "mt-20 text-center max-w-3xl mx-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-c21cbb298a0e5551" + " " + "bg-gradient-to-r from-slate-900/50 via-blue-900/30 to-slate-900/50 backdrop-blur-sm rounded-3xl p-10 border border-cyan-500/20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "jsx-c21cbb298a0e5551" + " " + "text-3xl font-bold text-white mb-4",
                                    children: "Not sure which package to choose?"
                                }, void 0, false, {
                                    fileName: "[project]/app/packages/page.tsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-c21cbb298a0e5551" + " " + "text-slate-400 mb-6 leading-relaxed",
                                    children: "Our dive experts are here to help you find the perfect package based on your experience level and preferences."
                                }, void 0, false, {
                                    fileName: "[project]/app/packages/page.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-c21cbb298a0e5551" + " " + "flex flex-col sm:flex-row gap-4 justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            variant: "primary",
                                            href: "/contact",
                                            children: "Talk to an Expert"
                                        }, void 0, false, {
                                            fileName: "[project]/app/packages/page.tsx",
                                            lineNumber: 156,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            variant: "outline",
                                            href: "/courses",
                                            children: "View Courses"
                                        }, void 0, false, {
                                            fileName: "[project]/app/packages/page.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/packages/page.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/packages/page.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/packages/page.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/packages/page.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(void 0, {
                id: "c21cbb298a0e5551",
                children: "@keyframes fadeInUp{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/packages/page.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/packages/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/packages/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f7ec68cf._.js.map