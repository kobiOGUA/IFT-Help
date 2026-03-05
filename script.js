const pdfData = [
    {
        chapterName: "Chapter 1: Foundations & Architecture Layers",
        subGroups: [
            {
                groupName: "Architecture, Organization & Layers (1.1, 1.2)",
                videoUrl: "https://files.catbox.moe/s8h11b.mp4",
                items: [
                    { title: "1.1 Architecture vs Organization", url: "https://files.catbox.moe/rb3ok6.pdf" },
                    { title: "1.2 The 6 Layers of Computer Architecture", url: "https://files.catbox.moe/ax719s.pdf" }
                ]
            },
            {
                groupName: "Computing History & Moore's Law (1.3, 1.4)",
                items: [
                    { title: "1.3 Computing History and The Stored Program Concept", url: "https://files.catbox.moe/p4k1b4.pdf" },
                    { title: "1.4 Moores Law and Industry Trends", url: "https://files.catbox.moe/1w35fu.pdf" }
                ]
            },
            {
                groupName: "Logic Gate Review (1.5)",
                videoUrl: "https://files.catbox.moe/wg33sc.mp4",
                items: [
                    { title: "1.5 Logic Gate Review", url: "https://files.catbox.moe/duxr6h.pdf" }
                ]
            }
        ]
    },
    {
        chapterName: "Chapter 2: The Processor & Memory Hierarchy",
        subGroups: [
            {
                groupName: "Von Neumann Machine & Memory Basics (2.1, 2.2)",
                videoUrl: "https://files.catbox.moe/fgf4og.mp4",
                items: [
                    { title: "2.1 Von Neumann (IAS) Machine Structure", url: "https://files.catbox.moe/kay0nv.pdf" },
                    { title: "2.2 Memory Subsystem Fundamentals", url: "https://files.catbox.moe/apltfz.pdf" }
                ]
            },
            {
                groupName: "Memory Ops, Registers & Bottlenecks (2.3, 2.5)",
                videoUrl: "https://files.catbox.moe/hpjw11.mp4",
                items: [
                    { title: "2.3 Memory Operations and Registers", url: "https://files.catbox.moe/oz6s5y.pdf" },
                    { title: "2.5 The Von Neumann Bottleneck", url: "https://files.catbox.moe/sfazq3.pdf" }
                ]
            }
        ]
    },
    {
        chapterName: "Chapter 3: Micro-op & Register Transfer Language",
        subGroups: [
            {
                groupName: "Register Designation & RTL Notation (3.1, 3.2)",
                videoUrl: "https://files.catbox.moe/gjzt35.mp4",
                items: [
                    { title: "3.1 Register Designation and Viewing", url: "https://files.catbox.moe/fw068b.pdf" },
                    { title: "3.2 RTL Notation and Basic Transfers", url: "https://files.catbox.moe/vhzizw.pdf" }
                ]
            },
            {
                groupName: "Micro-operations & Transfers (3.3 - 3.6)",
                videoUrl: "https://files.catbox.moe/fimf2j.mp4",
                items: [
                    { title: "3.3 Bus and Memory Transfers", url: "https://files.catbox.moe/d8ew0i.pdf" },
                    { title: "3.4 Arithmetic Micro-operations", url: "https://files.catbox.moe/weh7ep.pdf" },
                    { title: "3.5 Logic Micro-operations", url: "https://files.catbox.moe/vup64x.pdf" },
                    { title: "3.6 Shift Micro-operations", url: "https://files.catbox.moe/akmn28.pdf" }
                ]
            }
        ]
    },
    {
        chapterName: "Chapter 4: Instruction Execution & ISA",
        subGroups: [
            {
                groupName: "ISA Basics & The Instruction Cycle (4.1 - 4.3)",
                videoUrl: "https://files.catbox.moe/zrfor7.mp4",
                items: [
                    { title: "4.1 ISA Basics and Formats", url: "https://files.catbox.moe/qfpx5k.pdf" },
                    { title: "4.2 Addressing Modes", url: "https://files.catbox.moe/i1alxv.pdf" },
                    { title: "4.3 The Instruction Cycle", url: "https://files.catbox.moe/bicktv.pdf" }
                ]
            },
            {
                groupName: "CPU Metrics & Pipelining (4.4, 4.5)",
                videoUrl: "https://files.catbox.moe/qlf0et.mp4",
                items: [
                    { title: "4.4 CPU Performance Metrics", url: "https://files.catbox.moe/8d443h.pdf" },
                    { title: "4.5 Pipelining and Hazards", url: "https://files.catbox.moe/fmfm9x.pdf" }
                ]
            }
        ]
    },
    {
        chapterName: "Chapter 5: Computer Arithmetic Algorithms",
        subGroups: [
            {
                groupName: "Computer Arithmetic Algorithms (5.1)",
                videoUrl: "https://files.catbox.moe/ibxavq.mp4",
                items: [
                    { title: "5.1 Binary Multiplication", url: "https://files.catbox.moe/kbvjno.pdf" }
                ]
            }
        ]
    },
    {
        chapterName: "Chapter 6: Control Unit Design & MARIE",
        subGroups: [
            {
                groupName: "Control Unit & MARIE Architecture (6.1, 6.2, 6.4)",
                videoUrl: "https://files.catbox.moe/9cp72u.mp4",
                items: [
                    { title: "6.1 Control Unit Types", url: "https://files.catbox.moe/lfh3ss.pdf" },
                    { title: "6.2 Microprogrammed CU Concepts", url: "https://files.catbox.moe/8467rf.pdf" },
                    { title: "6.4 MARIE Simple Computer", url: "https://files.catbox.moe/s4z4k9.pdf" }
                ]
            }
        ]
    },
    {
        chapterName: "Chapter 7: Assembly Programming & I/O Systems",
        subGroups: [
            {
                groupName: "Assembly Syntax & I/O Systems (7.1, 7.2, 7.3, 7.5)",
                items: [
                    { title: "7.1 Intel 8086 Assembly Syntax", url: "https://files.catbox.moe/wc2ezn.pdf" },
                    { title: "7.2 Variables and Directives", url: "https://files.catbox.moe/j012pd.pdf" },
                    { title: "7.3 Procedures and The Stack", url: "https://files.catbox.moe/qes1ni.pdf" },
                    { title: "7.5 Interrupt Handling", url: "https://files.catbox.moe/74j4xo.pdf" }
                ]
            }
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.getElementById('chapterNav');
    const searchInput = document.getElementById('searchInput');
    const pdfFrame = document.getElementById('pdfFrame');
    const emptyState = document.getElementById('emptyState');
    const currentChapterLabel = document.getElementById('currentChapterLabel');
    const currentSubchapterLabel = document.getElementById('currentSubchapterLabel');
    const separator = document.querySelector('.separator');
    const openExternalBtn = document.getElementById('openExternalBtn');
    const themeToggle = document.getElementById('themeToggle');
    const mediaToggleContainer = document.getElementById('mediaToggleContainer');
    const btnSlides = document.getElementById('btnSlides');
    const btnVideo = document.getElementById('btnVideo');
    const videoFrame = document.getElementById('videoFrame');

    let currentPdfUrl = '';
    let currentVideoUrl = '';
    let isVideoMode = false;

    // Build the Navigation DOM
    function renderNavigation() {
        navContainer.innerHTML = '';

        pdfData.forEach((chapter, index) => {
            const chapItem = document.createElement('div');
            chapItem.className = 'chapter-item';
            if (index === 0) chapItem.classList.add('expanded'); // expand first by default

            // Chapter Header
            const header = document.createElement('div');
            header.className = 'chapter-header';
            header.innerHTML = `<span>${chapter.chapterName}</span><i class="fa-solid fa-chevron-right"></i>`;
            header.onclick = () => {
                chapItem.classList.toggle('expanded');
            };

            // Subchapters List container
            const subList = document.createElement('div');
            subList.className = 'subchapter-list';

            // Create grouped subchapters
            chapter.subGroups.forEach((group, gIndex) => {
                const groupObj = document.createElement('div');
                groupObj.className = 'group-item';
                if (index === 0 && gIndex === 0) groupObj.classList.add('expanded'); // expand first group

                const groupHeader = document.createElement('div');
                groupHeader.className = 'group-header';
                groupHeader.innerHTML = `<span>${group.groupName}</span><i class="fa-solid fa-chevron-right"></i>`;
                groupHeader.onclick = () => {
                    groupObj.classList.toggle('expanded');
                };

                const itemList = document.createElement('div');
                itemList.className = 'item-list';

                group.items.forEach(sub => {
                    const btn = document.createElement('button');
                    btn.className = 'subchapter-btn';
                    btn.textContent = sub.title;
                    btn.onclick = () => loadMedia(chapter.chapterName, sub.title, sub.url, btn, group.videoUrl);
                    itemList.appendChild(btn);
                });

                groupObj.appendChild(groupHeader);
                groupObj.appendChild(itemList);
                subList.appendChild(groupObj);
            });

            chapItem.appendChild(header);
            chapItem.appendChild(subList);
            navContainer.appendChild(chapItem);
        });
    }

    // Load PDF logic
    function loadMedia(chapter, subchapter, pdfUrl, btnElement, videoUrl) {
        // Handle Active States
        document.querySelectorAll('.subchapter-btn').forEach(b => b.classList.remove('active'));
        if (btnElement) btnElement.classList.add('active');

        // Update Labels
        currentChapterLabel.textContent = chapter;
        currentSubchapterLabel.textContent = subchapter;
        separator.style.display = 'block';

        // Set URLs
        currentPdfUrl = pdfUrl;
        currentVideoUrl = videoUrl || '';

        // Show toggle button if video exists
        if (currentVideoUrl) {
            mediaToggleContainer.style.display = 'flex';
        } else {
            mediaToggleContainer.style.display = 'none';
            isVideoMode = false; // reset mode
        }

        // Ensure iframe src is set
        pdfFrame.src = pdfUrl + "#toolbar=0&navpanes=0";
        videoFrame.src = currentVideoUrl;

        // Hide empty state
        emptyState.classList.add('hidden');
        renderMediaState();
    }

    function renderMediaState() {
        if (isVideoMode && currentVideoUrl) {
            pdfFrame.classList.add('hidden');
            videoFrame.classList.remove('hidden');
            btnSlides.classList.remove('active');
            btnVideo.classList.add('active');
        } else {
            videoFrame.classList.add('hidden');
            videoFrame.pause();
            pdfFrame.classList.remove('hidden');
            btnVideo.classList.remove('active');
            btnSlides.classList.add('active');
        }
    }

    btnSlides.onclick = () => {
        if (isVideoMode) {
            isVideoMode = false;
            renderMediaState();
        }
    };

    btnVideo.onclick = () => {
        if (!isVideoMode && currentVideoUrl) {
            isVideoMode = true;
            renderMediaState();
        }
    };

    // Open External
    openExternalBtn.onclick = () => {
        if (isVideoMode && currentVideoUrl) {
            window.open(currentVideoUrl, '_blank');
        } else if (currentPdfUrl) {
            window.open(currentPdfUrl, '_blank');
        } else {
            alert("No media currently selected.");
        }
    };

    // Theme Toggle
    themeToggle.onclick = () => {
        document.body.classList.toggle('light-theme');
        const icon = themeToggle.querySelector('i');
        if (document.body.classList.contains('light-theme')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    };

    // Filter Logic
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();

        document.querySelectorAll('.chapter-item').forEach(chap => {
            let chapHasVisibleSub = false;

            chap.querySelectorAll('.group-item').forEach(group => {
                let groupHasVisibleItem = false;

                group.querySelectorAll('.subchapter-btn').forEach(btn => {
                    if (btn.textContent.toLowerCase().includes(term)) {
                        btn.style.display = 'block';
                        groupHasVisibleItem = true;
                        chapHasVisibleSub = true;
                    } else {
                        btn.style.display = 'none';
                    }
                });

                if (groupHasVisibleItem) {
                    group.style.display = 'block';
                    if (term) group.classList.add('expanded');
                } else {
                    group.style.display = 'none';
                }
            });

            if (chapHasVisibleSub) {
                chap.style.display = 'block';
                if (term) chap.classList.add('expanded');
            } else {
                chap.style.display = 'none';
            }
        });
    });

    // Welcome Modal & Tutorial Logic
    const welcomeModal = document.getElementById('welcomeModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const showLinksBtn = document.getElementById('showLinksBtn');

    const tutorialModal = document.getElementById('tutorialModal');
    const closeTutBtn = document.getElementById('closeTutBtn');
    const startTutorialBtn = document.getElementById('startTutorialBtn');

    // Tutorial Elements
    const tutTitle = document.getElementById('tutTitle');
    const tutText = document.getElementById('tutText');
    const tutProgressFill = document.getElementById('tutProgressFill');
    const tutPrevBtn = document.getElementById('tutPrevBtn');
    const tutNextBtn = document.getElementById('tutNextBtn');
    const tutFinishBtn = document.getElementById('tutFinishBtn');

    const tutorialSteps = [
        {
            title: "Welcome to Study Portal 🚀",
            text: "This site breaks down complex IFT212 Data & Architecture lectures into perfectly granular, bite-sized slides and mapped videos."
        },
        {
            title: "1. The Syllabus Sidebar 📑",
            text: "Over on the left, you can expand any Chapter to explore logical groupings of topics based exactly on the course syllabus."
        },
        {
            title: "2. Smart Media Toggle 🎥",
            text: "If a specific sub-topic has a video, a 'Video / Slides' toggle will magically appear at the top center of the screen so you can seamlessly stream the lecture while checking the notes."
        },
        {
            title: "3. Dark Mode & Tabs 🌙",
            text: "Click the moon icon in the corner to save your eyes, or click the pop-out link icon to open your slides/video on a giant separate tab."
        },
        {
            title: "You're all set! 🎓",
            text: "That's it! Smash that finish button and happy studying. Check out Kobi's links in the sidebar if you need more help!"
        }
    ];

    let currentTutStep = 0;

    function renderTutorialStep() {
        const step = tutorialSteps[currentTutStep];
        tutTitle.textContent = step.title;
        tutText.textContent = step.text;

        // Progress
        const percent = ((currentTutStep + 1) / tutorialSteps.length) * 100;
        tutProgressFill.style.width = `${percent}%`;

        // Buttons
        if (currentTutStep === 0) {
            tutPrevBtn.style.display = 'none';
        } else {
            tutPrevBtn.style.display = 'flex';
        }

        if (currentTutStep === tutorialSteps.length - 1) {
            tutNextBtn.style.display = 'none';
            tutFinishBtn.style.display = 'flex';
        } else {
            tutNextBtn.style.display = 'flex';
            tutFinishBtn.style.display = 'none';
        }
    }

    tutPrevBtn.onclick = () => {
        if (currentTutStep > 0) {
            currentTutStep--;
            renderTutorialStep();
        }
    };

    tutNextBtn.onclick = () => {
        if (currentTutStep < tutorialSteps.length - 1) {
            currentTutStep++;
            renderTutorialStep();
        }
    };

    function closeTutorial() {
        tutorialModal.classList.remove('active');
        localStorage.setItem('kobiTutVisited', 'true');
    }

    tutFinishBtn.onclick = closeTutorial;
    closeTutBtn.onclick = closeTutorial;
    tutorialModal.addEventListener('click', (e) => {
        if (e.target === tutorialModal) closeTutorial();
    });

    if (!localStorage.getItem('kobiHelpVisited')) {
        // Show modal on very first visit
        setTimeout(() => {
            welcomeModal.classList.add('active');
        }, 800);
    } else if (!localStorage.getItem('kobiTutVisited')) {
        // Auto show tutorial on second visit if they haven't seen it
        setTimeout(() => {
            currentTutStep = 0;
            renderTutorialStep();
            tutorialModal.classList.add('active');
        }, 800);
    }

    closeModalBtn.addEventListener('click', () => {
        welcomeModal.classList.remove('active');
        localStorage.setItem('kobiHelpVisited', 'true');

        // After reading welcome, trigger tutorial if not seen
        if (!localStorage.getItem('kobiTutVisited')) {
            setTimeout(() => {
                currentTutStep = 0;
                renderTutorialStep();
                tutorialModal.classList.add('active');
            }, 500);
        }
    });

    showLinksBtn.addEventListener('click', () => {
        welcomeModal.classList.add('active');
    });

    startTutorialBtn.addEventListener('click', () => {
        currentTutStep = 0;
        renderTutorialStep();
        tutorialModal.classList.add('active');
    });

    // Close on click outside
    welcomeModal.addEventListener('click', (e) => {
        if (e.target === welcomeModal) {
            welcomeModal.classList.remove('active');
            localStorage.setItem('kobiHelpVisited', 'true');
        }
    });

    renderNavigation();
});
