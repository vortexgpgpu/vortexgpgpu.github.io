/* ============================================================
   Vortex site content — single source of truth.
   Edit this file to update the site; pages render from it.

   `publications` follows Table 1 of the Vortex survey
   ("The Vortex Open-Source GPU Ecosystem"), newest first.
   ============================================================ */
window.VORTEX = {

  /* ---------- global ---------- */
  site: {
    name: "Vortex",
    tagline: "OpenCL-Compatible RISC-V GPGPU",
    github: "https://github.com/vortexgpgpu/",
    repo: "https://github.com/vortexgpgpu/vortex",
    tutorialRepo: "https://github.com/vortexgpgpu/vortex_tutorials",
    mailingList: "vortex-dev@lists.gatech.edu",
    mailingListForm: "https://docs.google.com/forms/d/1r8E-Yo5NwA45Hi3-kEwte4AxK0mBsYDwgjM6Bul4so0/viewform",
    contact: "vortexgpu@cc.gatech.edu",
    submissionEmail: "vortex_submission@groups.gatech.edu",
    org: "HPArch, Georgia Institute of Technology",
    readme: "https://github.com/vortexgpgpu/vortex#readme",
    license: "Apache License 2.0",
    licenseUrl: "https://github.com/vortexgpgpu/vortex/blob/master/LICENSE"
  },

  /* ---------- how to cite ---------- */
  citations: [
    { label: "Vortex (main paper)",
      note: "Cite this if you use the Vortex platform, ISA extension, or microarchitecture.",
      link: "https://dl.acm.org/doi/10.1145/3466752.3480128",
      bibtex:
'@inproceedings{tine2021vortex,\n' +
'  author    = {Tine, Blaise and Yalamarthy, Krishna Praveen and Elsabbagh, Fares and Kim, Hyesoon},\n' +
'  title     = {Vortex: Extending the RISC-V ISA for GPGPU and 3D-Graphics},\n' +
'  booktitle = {MICRO-54: 54th Annual IEEE/ACM International Symposium on Microarchitecture},\n' +
'  series    = {MICRO \'21},\n' +
'  pages     = {754--766},\n' +
'  year      = {2021},\n' +
'  publisher = {Association for Computing Machinery},\n' +
'  address   = {New York, NY, USA},\n' +
'  doi       = {10.1145/3466752.3480128}\n' +
'}' },
    { label: "Skybox (graphics)",
      note: "Cite this if you use the graphics rendering pipeline or the Vulkan support.",
      link: "https://dl.acm.org/doi/10.1145/3582016.3582024",
      bibtex:
'@inproceedings{tine2023skybox,\n' +
'  author    = {Tine, Blaise and Saxena, Varun and Srivatsan, Santosh and Simpson, Joshua R. and\n' +
'               Alzammar, Fadi and Cooper, Liam and Kim, Hyesoon},\n' +
'  title     = {Skybox: Open-Source Graphic Rendering on Programmable RISC-V GPUs},\n' +
'  booktitle = {Proceedings of the 28th ACM International Conference on Architectural Support\n' +
'               for Programming Languages and Operating Systems, Volume 3},\n' +
'  series    = {ASPLOS 2023},\n' +
'  pages     = {616--630},\n' +
'  year      = {2023},\n' +
'  publisher = {Association for Computing Machinery},\n' +
'  address   = {New York, NY, USA},\n' +
'  doi       = {10.1145/3582016.3582024}\n' +
'}' },
    { label: "VOLT (compiler)",
      note: "Cite this if you use the VOLT compiler toolchain or its CUDA/OpenCL front ends.",
      link: "https://dl.acm.org/doi/10.1145/3771775.3786275",
      bibtex:
'@inproceedings{jeong2026volt,\n' +
'  author    = {Jeong, Shinnung and Ahn, Chihyo and Pu, Huanzhi and Zhao, Jisheng and\n' +
'               Kim, Hyesoon and Tine, Blaise},\n' +
'  title     = {Inside VOLT: Designing an Open-Source GPU Compiler},\n' +
'  booktitle = {Proceedings of the 35th ACM SIGPLAN International Conference on Compiler Construction},\n' +
'  series    = {CC \'26},\n' +
'  pages     = {155--167},\n' +
'  year      = {2026},\n' +
'  publisher = {Association for Computing Machinery},\n' +
'  address   = {New York, NY, USA},\n' +
'  doi       = {10.1145/3771775.3786275}\n' +
'}' }
  ],

  nav: [
    { label: "Home",        href: "index.html",        key: "home" },
    { label: "Publications", href: "publications.html", key: "publications" },
    { label: "News",         href: "news.html",         key: "news" },
    { label: "Teams",        href: "teams.html",        key: "teams" },
    { label: "Workshop & Tutorial", href: "tutorials.html", key: "tutorials" },
    { label: "Blog",         href: "blog.html",         key: "blog" },
    { label: "Community",    href: "community.html",    key: "community" }
  ],

  /* ---------- home ---------- */
  intro:
    "Vortex is an open-source hardware and software project to support GPGPU based on RISC-V ISA extensions. Currently Vortex supports OpenCL and it runs on FPGA. The Vortex platform is highly customizable and scalable with a complete open-source compiler, driver, and runtime software stack to enable research in GPU architectures.",

  highlights: [
    { k: "Open ISA",  v: "RISC-V",  d: "A minimal SIMT extension on top of a standard, open instruction set." },
    { k: "Scales to", v: "32 cores", d: "512 threads on a single high-end FPGA at 200+ MHz." },
    { k: "Full stack", v: "HW + SW", d: "Compiler, driver, runtime, and a synthesizable microarchitecture." },
    { k: "APIs",      v: "OpenCL",  d: "Runs real GPU workloads: ML, graph analytics, and graphics." }
  ],

  features: [
    { icon: "◧", title: "Synthesizable microarchitecture",
      body: "Multi-core SIMT design with fully pipelined non-blocking caches and scratchpad shared memory, validated on Intel and Xilinx FPGAs.",
      href: "https://github.com/vortexgpgpu/vortex", cta: "vortexgpgpu/vortex" },
    { icon: "◐", title: "Complete software stack",
      body: "VOLT — the Vortex-Optimized Lightweight Toolchain — is the first end-to-end open-source CUDA/OpenCL compiler for an open GPU, built on LLVM and PoCL.",
      href: "https://github.com/vortexgpgpu/Volt", cta: "vortexgpgpu/Volt" },
    { icon: "◑", title: "Graphics and ML",
      body: "Skybox adds hybrid rasterization for the Vulkan API, while current work targets tensor cores, structured sparsity, ray tracing, and end-to-end ML.",
      href: "https://github.com/vortexgpgpu/skybox", cta: "vortexgpgpu/skybox" },
    { icon: "◒", title: "From FPGA toward silicon",
      body: "Vortex is moving past FPGA prototyping: ASIC synthesis flows ship with the platform, and the team is currently taping out and testing Vortex silicon." }
  ],

  featured: {
    title: "Vortex Workshop and Tutorial at MICRO 2026",
    date: "31 October – 4 November 2026 · Athens, Greece",
    href: "micro2026.html"
  },

  devMeeting: {
    tag: "Community",
    title: "Monthly Vortex Developer Meeting",
    body: "We meet every month to walk through ongoing development, review contributions, and plan upcoming releases — open to everyone working with Vortex. Sign up for the mailing list and we will email you the invitation.",
    cta: "Join the mailing list",
    href: "https://docs.google.com/forms/d/1r8E-Yo5NwA45Hi3-kEwte4AxK0mBsYDwgjM6Bul4so0/viewform"
  },

  /* ---------- publications (survey Table 1, newest first) ---------- */
  publications: [
    { title: "Supporting Async Barrier and TMA for Vortex GPGPU",
      authors: "Chengxuan Wang, Blaise Tine",
      venue: "OSCAR (poster)", year: 2026,
      link: "https://oscar-workshop.github.io/files/P_4_Async_Barrier_TMA.pdf",
      extra: [{ label: "Code", href: "https://github.com/vortexgpgpu/vortex/tree/dxa-opts-arrive-tx" }] },

    { title: "Thread-Scalable 2:4 Structured Sparsity on an Open RISC-V GPU",
      authors: "Yanggon Kim, Xinle Song, Blaise Tine",
      venue: "OSCAR", year: 2026,
      link: "https://oscar-workshop.github.io/files/4_3_Vortex_sparsity.pdf",
      extra: [{ label: "Code", href: "https://github.com/vortexgpgpu/vortex/tree/oscar-sparse-tcu" }] },

    { title: "PRISM: Accelerating Ray Tracing on RISC-V GPU",
      authors: "Kuan Fu Chen, Blaise Tine",
      venue: "OSCAR (poster)", year: 2026,
      link: "https://oscar-workshop.github.io/files/P_10_PRISM.pdf",
      extra: [{ label: "Code", href: "https://github.com/vortexgpgpu/vortex/tree/prism" }] },

    { title: "CycleFence: Precise Cycle-Level Profiling for RISC-V GPUs",
      authors: "Xinle Song, Blaise Tine",
      venue: "OSCAR (poster)", year: 2026,
      link: "https://oscar-workshop.github.io/files/P_1_CycleFence.pdf",
      extra: [{ label: "Code", href: "https://github.com/vortexgpgpu/vortex/tree/feature_CycleFence" }] },

    { title: "Toward End-to-End ML Support on Vortex",
      authors: "Shinnung Jeong, Chihyo Ahn, Sai Hemanth Reddy Bheemreddy, Liam Cooper, Krishil Gandhi, Chulhyung Park, Vincent Pham, Huanzhi Pu, Saurabh Singh, Mitul Tandon, Jisheng Zhao, Hyesoon Kim",
      venue: "OSCAR", year: 2026,
      link: "https://oscar-workshop.github.io/files/1_2_OSCAR_vortex_ML_final.pdf" },

    { selected: true, title: "Ten-Four: An Open-Source Fused Dot Product Unit for Mixed-Precision GPGPU Tensor Cores",
      authors: "N. Rout, Blaise Tine",
      venue: "Vortex Workshop", year: 2026,
      link: "https://arxiv.org/abs/2512.00053",
      abstract: "Ten-Four is a scalable mixed-precision fused dot product unit that integrates both floating-point and integer arithmetic pipelines within a single fused architecture, implemented as part of the open-source RISC-V-based Vortex GPGPU's Tensor Core Unit extension. The design supports low-precision multiplication in FP16/BF16/FP8/BF8/INT8/INT4 formats with higher-precision accumulation in FP32/INT32, with native support for Microscaling (MX) formats and sparse lane clock-gating for dynamic power reduction." },

    { title: "FastTrackGPU: Static-Analysis–Guided Analytical Modeling for Softcore GPUs",
      authors: "Chihyo Ahn, Shinnung Jeong, Liam Paul Cooper, Ruobing Han, Huanzhi Pu, Nicholas Parnenzini, Jisheng Zhao, Blaise Tine, Hyesoon Kim",
      venue: "IEEE CAL", year: 2026,
      link: "https://doi.org/10.1109/LCA.2026.3677349",
      abstract: "SoftGPUs make FPGA platforms practical data-parallel accelerators by providing a GPU-like programming model on top of an open RTL-to-software stack. However, their high configurability creates a large configuration space, making it difficult to identify workload-optimal designs under FPGA resource constraints. This work proposes the first analytical model for softGPUs together with four decision policies that aggressively prune the design space, enabling orders-of-magnitude faster configuration selection than Bayesian optimization while achieving up to 1.55× higher kernel throughput than area-greedy baselines." },

    { title: "CuLifter: Lifting GPU Binaries to Typed IR",
      authors: "Jisheng Zhao, Huanzhi Pu, Shinnung Jeong, Chihyo Ahn, Hyesoon Kim",
      venue: "MICRO", year: 2026,
      link: "https://arxiv.org/abs/2604.27486",
      abstract: "GPU compilers merge all data types into a single unified register file, erasing the type information that binary-analysis tools rely on; type recovery from this untyped register file is the central challenge of GPU binary lifting. CuLifter is a SASS-to-LLVM IR lifting framework that recovers register types via constraint propagation with conflict detection, reconstructs explicit control flow, and aggregates multi-instruction patterns. Across eight benchmark suites spanning 24,437 GPU functions in 919 cubins, CuLifter lifts 99.98% of functions to valid LLVM IR." },

    { selected: true, title: "Inside VOLT: Designing an Open-Source GPU Compiler (Tool)",
      authors: "Shinnung Jeong, Chihyo Ahn, Huanzhi Pu, Jisheng Zhao, Hyesoon Kim, Blaise Tine",
      venue: "CC (SIGPLAN)", year: 2026,
      link: "https://dl.acm.org/doi/10.1145/3771775.3786275",
      extra: [{ label: "arXiv", href: "https://arxiv.org/abs/2511.13751" }],
      abstract: "VOLT — the Vortex-Optimized Lightweight Toolchain — enables SIMT code generation and optimization across multiple levels of abstraction through a hierarchical design that accommodates diverse front-end languages and open GPU hardware. It is the first published, end-to-end open-source CUDA/OpenCL compiler for an open GPU, built on LLVM and PoCL and integrating CuPBoP for CUDA support." },

    { title: "Deploying Vortex FPGA Development Environment with Apptainer",
      authors: "Udit Subramanya, Rahul Raj, Jeff Young, Hyesoon Kim",
      venue: "OSCAR", year: 2025,
      link: "https://oscar-workshop.github.io/Program_2025.html" },

    { title: "Multiport Support for Vortex OpenGPU Memory Hierarchy",
      authors: "Injae Shin, Blaise Tine",
      venue: "OSSMPIC", year: 2025,
      link: "https://arxiv.org/abs/2503.17602",
      abstract: "This work extends the Vortex OpenGPU microarchitecture to incorporate a multiport memory hierarchy spanning from the L1 cache to the last-level cache, and proposes several arbitration strategies to optimize memory transfers across the cache hierarchy. Increasing the number of memory ports increases IPC, achieving an average speedup of 2.34× with 8 memory ports in the tested configuration while incurring relatively small area overhead." },

    { title: "Hardware vs. Software Implementation of Warp-Level Features in Vortex RISC-V GPU",
      authors: "Huanzhi Pu, Rishabh Ravi, Shinnung Jeong, Udit Subramanya, Euijun Chung, Jisheng Zhao, Chihyo Ahn, Hyesoon Kim",
      venue: "DATE (OSSMPIC)", year: 2025,
      link: "https://arxiv.org/abs/2505.03102",
      abstract: "Modern GPU programming increasingly relies on warp-level features that diverge from the conventional SPMD paradigm. This paper explores how RISC-V GPUs can support these warp-level features both through hardware implementation and via software-only approaches. The hardware implementation modifies the Vortex core to support vote and shuffle functions by altering the ALU and decoder and introducing new instructions; while hardware extensions offer performance benefits, they also incur area costs, whereas a software-only approach avoids hardware overhead but requires additional instruction overhead and compiler support." },

    { title: "Analysis of the RISC-V Vector Extension for Vulkan Graphics Kernels",
      authors: "Martin Troiber, Martin Schulz, Blaise Tine, Hyesoon Kim",
      venue: "ISPASS (poster)", year: 2025,
      link: "https://ieeexplore.ieee.org/document/11096397",
      abstract: "This work analyzes the benefits of the RISC-V vector extension for accelerating 3D graphics kernels, using open-source projects for the graphics driver (SwiftShader), GPU (Vortex), and instruction set architecture (RISC-V). In GPU simulation, cycle count was reduced by up to 54% compared to scalar kernels; on a Kendryte K230 CPU, the frame rate of the Vulkan gears demo increased by over 85% compared to scalar execution." },

    { title: "SoftCUDA: Running CUDA on Softcore GPU",
      authors: "Chihyo Ahn, Ruobing Han, Udit Subramanya, Jisheng Zhao, Blaise Tine, Hyesoon Kim",
      venue: "FCCM", year: 2025,
      link: "https://ieeexplore.ieee.org/document/11008973",
      abstract: "SoftCUDA is a framework that delivers comprehensive, end-to-end CUDA support on a softcore GPU (Vortex). While FPGAs have been extensively used to accelerate parallel applications, FPGA-based designs have seen limited adoption due to the lack of comprehensive software stack support, as translating CUDA source code to alternative programming models can be challenging and often lacks direct feature parity." },

    { title: "SparseWeaver: Converting Sparse Operations as Dense Operations on GPUs for Graph Workloads",
      authors: "Shinnung Jeong, Liam Paul Cooper, Ju Min Lee, Heelim Choi, Nicholas Parnenzini, Chihyo Ahn, Yongwoo Lee, Hanjun Kim, Hyesoon Kim",
      venue: "HPCA", year: 2025,
      link: "https://ieeexplore.ieee.org/document/10946718",
      abstract: "Thanks to their scalable parallel processing capability, GPUs are promising computing resources for graph processing, in which identical operations are applied to a large number of edges and vertices. However, the sparsity and skewness of real-world graphs cause imbalanced workloads across GPU threads within the same warp, thus impeding efficient processing on the GPU. This work proposes SparseWeaver, a hardware-software collaborative graph processing framework that converts sparse operations in graph processing into dense operations using graph topology and balances workloads across GPU threads. Prototyped on the open-source RISC-V Vortex GPU, SparseWeaver demonstrates 2.36× faster execution than state-of-the-art schemes with a low area overhead of 0.045%." },

    { title: "An Open ISA for SIMT-based General-Purpose Processors: A Full-Stack Open-Source GPGPU",
      authors: "Blaise Tine",
      venue: "Ph.D. Dissertation", year: 2024,
      note: "Georgia Institute of Technology" },

    { title: "Comparative Analysis of Executing GPU Applications on FPGA: HLS vs. Soft GPU Approaches",
      authors: "Chihyo Ahn, Shinnung Jeong, Liam Paul Cooper, Nicholas Parnenzini, Hyesoon Kim",
      venue: "IPDPSW (CGRA4HPC)", year: 2024,
      link: "https://ieeexplore.ieee.org/document/10596521",
      abstract: "Given its low energy cost and programmable hardware, the FPGA emerges as a promising candidate to run GPU applications. However, the gap between GPU programming languages and hardware description languages poses a significant challenge for this transition. This paper examines how HLS and soft GPU compile GPU languages for FPGA by discussing the detailed compilation and execution flow of two representative works — Intel FPGA SDK for OpenCL and Vortex — and evaluates the coverage of both approaches." },

    { selected: true, title: "Skybox: Open-Source Graphic Rendering on Programmable RISC-V GPUs",
      authors: "Blaise Tine, Varun Saxena, Santosh Srivatsan, Joshua R. Simpson, Fadi Alzammar, Liam Cooper, Hyesoon Kim",
      venue: "ASPLOS", year: 2023,
      link: "https://dl.acm.org/doi/10.1145/3582016.3582024",
      abstract: "Graphics rendering remains one of the most compute intensive and memory bound applications of GPUs. In this work, we present Skybox, a full-stack open-source GPU architecture with integrated software, compiler, hardware, and simulation environment, that enables end-to-end GPU research. Using Skybox, we explore the design space of software versus hardware graphics rendering and propose a hybrid micro-architecture that accelerates the state-of-the-art Vulkan graphics API. We generated and executed a 32 core (512 threads) Skybox graphics processor on an Altera Stratix 10 FPGA, delivering a peak fill rate of 3.7 GPixels at 230 MHz. Skybox is the first open-source full-stack GPU software and hardware implementation that supports the Vulkan API." },

    { title: "Implementing Hardware Extensions for Multicore RISC-V GPUs",
      authors: "Blaise Tine, Hyesoon Kim",
      venue: "CARRV", year: 2022,
      link: "https://carrv.github.io/2022/papers/CARRV2022_paper_11_Blaise.pdf",
      abstract: "Extending a RISC-V-based GPU to support custom hardware acceleration while still maintaining compatibility with the RISC-V ISA is not a trivial task. Part of the challenge involves extending the instruction set and register file; the other part is figuring out how the hardware addition will interface with the existing processor pipeline. In this work, we present a generalized methodology for implementing hardware extensions for multi-core RISC-V-based GPUs, addressing both the ISA and microarchitecture changes, and provide a generalized solution for supporting hardware performance monitoring counters for platforms with multiple custom accelerators onboard." },

    { title: "The Tip of Iceberg in Open-Source Hardware GPU",
      authors: "Blaise Tine, Ruobing Han, Hyesoon Kim",
      venue: "OSCAR", year: 2022,
      link: "https://oscar-workshop.github.io/files/OpenGPUResearch_OSCAR22.pdf",
      abstract: "A workshop presentation on the state of open-source GPU hardware research and the challenges facing open GPGPU platforms." },

    { selected: true, title: "Accelerating Graphic Rendering on Programmable RISC-V GPUs",
      authors: "Blaise Tine, Varun Saxena, Santosh Srivatsan, Joshua R. Simpson, Fadi Alzammar, Liam Paul Cooper, Sam Jijina, Swetha Rajagoplan, Tejaswini Anand Kumar, Jeff Young, Hyesoon Kim",
      venue: "Hot Chips 34", year: 2022,
      link: "https://ieeexplore.ieee.org/document/9895607",
      extra: [{ label: "Poster", href: "https://hc34.hotchips.org/assets/program/posters/HC2022.vortex.BlaiseTine.v01.pdf" }],
      abstract: "This work proposes a RISC-V-based hybrid GPU architecture that accelerates the graphics pipeline without paying the cost of a full hardware graphics pipeline." },

    { title: "A Scalable Multicore RISC-V GPGPU Accelerator for High-End FPGAs",
      authors: "Blaise Tine, Fares Elsabbagh, Apurve Chawda, Will Gulian, Yaotian Feng, Da Eun Shim, Priyadarshini Roshan, Ethan Lyons, Lingjun Zhu, Sung Kyu Lim, Seyong Lee, Jeff Vetter, Hyesoon Kim",
      venue: "DAC (DIET)", year: 2021,
      abstract: "In this work, we implemented Vortex, a full-scale PCIe-based GPGPU accelerator on modern high-end Intel FPGAs. Vortex implements the RISC-V ISA with an extension to support the SIMT execution model, a multi-core architecture with high-bandwidth fully pipelined non-blocking caches, and a scratchpad shared memory to achieve maximum throughput. We fit a 16-core processor configuration with high-bandwidth caches on an Intel Arria 10 FPGA, clocking at 203–234 MHz." },

    { selected: true, title: "Vortex: Extending the RISC-V ISA for GPGPU and 3D-Graphics",
      authors: "Blaise Tine, Krishna Praveen Yalamarthy, Fares Elsabbagh, Hyesoon Kim",
      venue: "MICRO-54", year: 2021,
      link: "https://dl.acm.org/doi/10.1145/3466752.3480128",
      extra: [{ label: "arXiv", href: "https://arxiv.org/abs/2110.10857" }],
      abstract: "Despite GPUs being one of the more popular accelerators across various applications, there is very little open-source GPU infrastructure in the public domain. In this work, we propose an ISA extension to RISC-V that supports GPGPUs and graphics, with the goal of minimizing ISA changes so that the corresponding changes to the open-source ecosystem are also minimal. To demonstrate the feasibility of the minimally extended RISC-V ISA, we implemented the complete software and hardware stacks of Vortex on FPGA. Vortex is a PCIe-based soft GPU that supports OpenCL and OpenGL and scales up to 32 cores on an Altera Stratix 10 FPGA." },

    { title: "Vortex: OpenCL Compatible RISC-V GPGPU",
      authors: "Fares Elsabbagh, Blaise Tine, Priyadarshini Roshan, Ethan Lyons, Euna Kim, Da Eun Shim, Lingjun Zhu, Sung Kyu Lim, Hyesoon Kim",
      venue: "arXiv", year: 2020,
      link: "https://arxiv.org/abs/2002.12151",
      abstract: "The current challenges in technology scaling are pushing the semiconductor industry towards hardware specialization, creating a proliferation of heterogeneous systems-on-chip. In this work, we present Vortex, a RISC-V General-Purpose GPU that supports OpenCL. Vortex implements a SIMT architecture with a minimal ISA extension to RISC-V that enables the execution of OpenCL programs, and we extended the OpenCL runtime framework to use the new ISA. We evaluate this design using 15nm technology." },

    { title: "Vortex RISC-V GPGPU System: Extending the ISA, Synthesizing the Microarchitecture, and Modeling the Software Stack",
      authors: "Fares Elsabbagh, Bahar Asgari, Hyesoon Kim, Sudhakar Yalamanchili",
      venue: "CARRV", year: 2019,
      link: "https://carrv.github.io/2019/papers/carrv2019_paper_10.pdf",
      abstract: "One of the domains of processor design that can take advantage of RISC-V, but has not seen enough attention, is general-purpose GPU (GPGPU) design. To support the development of an open-source GPGPU system, we present Vortex, our solution for building single instruction, multiple thread (SIMT) execution using RISC-V. In addition to a synthesizable microarchitecture model, we propose a GPU ISA extension to RISC-V and a software model, in the form of a runtime kernel, which makes Vortex practical and easy to integrate." }
  ],

  /* ---------- related group publications (not in survey Table 1) ---------- */
  legacyPublications: [
    { title: "CuPBoP: CUDA for Parallelized and Broad-range Processors",
      authors: "Ruobing Han, Jun Chen, Bhanu Garg, Jeffrey Young, Jaewoong Sim, Hyesoon Kim",
      venue: "arXiv", year: 2022, link: "https://arxiv.org/abs/2206.07896",
      abstract: "CUDA is one of the most popular choices for GPU programming, but it can only be executed on NVIDIA GPUs. CuPBoP executes CUDA on non-NVIDIA devices without relying on any portable programming languages, achieving the highest coverage (69.6%) on the Rodinia benchmark compared with existing frameworks (56.6%). For CPU backends, CuPBoP supports several ISAs including X86, RISC-V, and AArch64." },
    { title: "COX: CUDA on X86 by Exposing Warp-Level Functions to CPUs",
      authors: "Ruobing Han, Jaewon Lee, Jaewoong Sim, Hyesoon Kim",
      venue: "arXiv", year: 2021, link: "https://arxiv.org/abs/2112.10034",
      abstract: "The new CUDA programming model exposes the warp concept in the programming language, which greatly changes the way CUDA code should be mapped to CPU programs. In this paper, hierarchical collapsing that correctly supports CUDA warp-level functions on CPUs is proposed, together with COX, a framework that allows CUDA programs with the latest features to be executed efficiently on CPU platforms." },
    { title: "Bringing OpenCL to Commodity RISC-V CPUs",
      authors: "Blaise Tine, Seyong Lee, Jeff Vetter, Hyesoon Kim",
      venue: "CARRV", year: 2021, link: "https://carrv.github.io/2021/papers/CARRV2021_paper_36_Blaise.pdf",
      extra: [
        { label: "Video", href: "https://carrv.github.io/2021/videos/CARRV2021_full_36_Blaise.html" },
        { label: "Slides", href: "https://carrv.github.io/2021/slides/CARRV2021_slides_36_Blaise.pdf" }
      ],
      abstract: "There is currently no publicly available implementation of OpenCL targeting commodity RISC-V processors that is accessible to the open-source community. In this work, we extended an open-source implementation of OpenCL to target RISC-V CPUs, covering both commodity multi-core RISC-V processors and low-profile embedded RISC-V CPUs that often do not support atomic instructions or multi-threading." },
    { title: "Supporting CUDA for an Extended RISC-V GPU Architecture",
      authors: "Ruobing Han, Blaise Tine, Jaewon Lee, Jaewoong Sim, Hyesoon Kim",
      venue: "CARRV", year: 2021, link: "https://carrv.github.io/2021/papers/CARRV2021_paper_66_Han.pdf",
      extra: [
        { label: "Video", href: "https://carrv.github.io/2021/videos/CARRV2021_full_66_Han.html" },
        { label: "Slides", href: "https://carrv.github.io/2021/slides/CARRV2021_slides_66_Han.pdf" }
      ],
      abstract: "In this project, we design and implement a pipeline that can execute CUDA source code on a RISC-V GPU architecture, succeeding in executing CUDA kernels with several important features such as multi-threading and atomic instructions." },
    { title: "Cryptography Acceleration in a RISC-V GPGPU",
      authors: "Austin Adams, Pulkit Gupta, Blaise Tine, Hyesoon Kim",
      venue: "CARRV", year: 2021, link: "https://carrv.github.io/2021/papers/CARRV2021_paper_87_Adams.pdf",
      extra: [
        { label: "Video", href: "https://carrv.github.io/2021/videos/CARRV2021_full_87_Adams.html" },
        { label: "Slides", href: "https://carrv.github.io/2021/slides/CARRV2021_slides_87_Adams.pdf" }
      ],
      abstract: "We extend an existing GPGPU with a cryptography execute unit that accelerates key elements of AES and SHA. We implement a subset of the RISC-V cryptography extensions draft specification on the Vortex GPGPU, seeing 1.6× speedup for SHA-256 and 6.6× speedup for AES-256 on average over pure software implementations." },
    { title: "Vortex: An Open Source Reconfigurable RISC-V GPGPU Accelerator for Architecture Research",
      authors: "Fares Elsabbagh, Blaise Tine, Apurve Chawda, Will Gulian, Yaotian Feng, Da Eun Shim, Priyadarshini Roshan, Ethan Lyons, Lingjun Zhu, Sung Kyu Lim, Hyesoon Kim",
      venue: "Hot Chips 32", year: 2020, link: "https://vortex.cc.gatech.edu/publications/hotchips-poster.pdf",
      abstract: "We present Vortex, a full-stack RISC-V GPGPU processor with OpenCL support. The Vortex platform is highly customizable and scalable with a complete open-source compiler, driver, and runtime software stack to enable research in GPU architectures. We evaluated this design using 15nm technology." }
  ],

  /* ---------- news ---------- */
  news: [
    { title: "Vortex work presented at OSCAR 2026", date: "2026-06-28",
      note: "Blaise Tine and Shinnung Jeong presented Vortex work at the Open-Source Computer Architecture Research workshop (OSCAR), co-located with ISCA 2026 in Raleigh, NC — covering end-to-end ML support, thread-scalable 2:4 structured sparsity, ray-tracing acceleration (PRISM), cycle-level profiling (CycleFence), and async barrier / TMA support.",
      href: "https://oscar-workshop.github.io/Program_2026.html", cta: "See the program" },
    { title: "Vortex Workshop and Tutorial at MICRO 2026", date: "2026-08-01",
      note: "The Vortex Workshop and Tutorial returns at MICRO 2026 in Athens, Greece. The call for papers is now open.",
      href: "micro2026.html", cta: "See details and CFP" },
    { title: "Vortex Workshop and Tutorial at MICRO 2025", date: "2025-10-17",
      note: "Details can be found on the MICRO 2025 page.", href: "micro2025.html", cta: "See details" },
    { title: "Vortex Workshop and Tutorial at MICRO 2024", date: "2024-08-06",
      note: "Details can be found on the MICRO 2024 page.", href: "micro2024.html", cta: "See details" },
    { title: "Inside VOLT published at CC 2026", date: "2026-01-31",
      note: "\"Inside VOLT: Designing an Open-Source GPU Compiler\" was published at the 35th ACM SIGPLAN International Conference on Compiler Construction (CC 2026) in Sydney, Australia. VOLT is the first end-to-end open-source CUDA/OpenCL compiler for an open GPU.",
      href: "https://dl.acm.org/doi/10.1145/3771775.3786275", cta: "See publication" },
    { title: "Ten-Four tensor core unit released", date: "2025-12-01",
      note: "Ten-Four, an open-source mixed-precision fused dot product unit for the Vortex Tensor Core Unit extension, is available as a preprint. It supports FP16/BF16/FP8/BF8/INT8/INT4 multiplication with FP32/INT32 accumulation, native Microscaling (MX) formats, and sparse lane clock-gating — bringing open tensor core hardware to Vortex.",
      href: "https://arxiv.org/abs/2512.00053", cta: "Read the preprint" },
    { title: "SoftCUDA published at FCCM 2025", date: "2025-05-04",
      note: "\"SoftCUDA: Running CUDA on Softcore GPU\" was published at the 33rd IEEE International Symposium on Field-Programmable Custom Computing Machines (FCCM 2025). SoftCUDA delivers comprehensive, end-to-end CUDA support on Vortex, closing the software-stack gap that has limited adoption of FPGA-based designs.",
      href: "https://ieeexplore.ieee.org/document/11008973", cta: "See publication" },
    { title: "SparseWeaver published at HPCA 2025", date: "2025-03-01",
      note: "\"SparseWeaver: Converting Sparse Operations as Dense Operations on GPUs for Graph Workloads\" was published at the 31st IEEE International Symposium on High-Performance Computer Architecture (HPCA 2025) in Las Vegas. Prototyped on Vortex, it delivers 2.36× faster execution at 0.045% area overhead.",
      href: "https://ieeexplore.ieee.org/document/10946718", cta: "See publication" },
    { title: "Vortex presented at OSCAR 2025", date: "2025-06-21",
      note: "Prof. Hyesoon Kim presented \"Deploying Vortex FPGA Development Environment with Apptainer\" at the Open-Source Computer Architecture Research workshop (OSCAR), co-located with ISCA 2025 in Tokyo, Japan.",
      href: "https://oscar-workshop.github.io/Program_2025.html", cta: "See the program" },
    { title: "Vortex 2.0 has been released", date: "2023-10-18",
      note: "Vortex 2.0 is now public.", href: "https://github.com/vortexgpgpu/vortex", cta: "Go to repository" },
    { title: "Vortex tutorial at MICRO 2023", date: "2023-10-28",
      note: "Details can be found on the MICRO 2023 page.", href: "micro2023.html", cta: "See details" },
    { title: "Vortex paper presented at ASPLOS 2023", date: "2023-03-26",
      note: "Skybox: Open-Source Graphic Rendering on Programmable RISC-V GPUs was presented at ASPLOS 2023.",
      href: "https://dl.acm.org/doi/10.1145/3582016.3582024", cta: "See publication" },
    { title: "Vortex tutorial at MICRO 2022", date: "2022-09-30",
      note: "Details can be found on the MICRO 2022 page.", href: "micro2022.html", cta: "See details" },
    { title: "Vortex workshop at OSCAR 2022", date: "2022-06-17",
      note: "See the workshop presentation.",
      href: "https://oscar-workshop.github.io/files/OpenGPUResearch_OSCAR22.pdf", cta: "View slides" },
    { title: "Vortex paper at MICRO 2021", date: "2021-09-30",
      note: "The Vortex paper has been accepted by MICRO 2021.",
      href: "https://dl.acm.org/doi/10.1145/3466752.3480128", cta: "See publication" },
    { title: "3 Vortex-related papers are in CARRV 2021", date: "2021-06-22",
      note: "Three Vortex-related papers appear in CARRV 2021. They can be found on the Publications page.",
      href: "publications.html", cta: "See publications" },
    { title: "Vortex will be in DAC DIET in 2021", date: "2021-03-17",
      note: "A Scalable Multicore RISC-V GPGPU Accelerator for High-End FPGAs was selected to present a Designer Track poster at one of the DIET Poster Receptions at DAC 2021, December 5–9." },
    { title: "Vortex is public on GitHub", date: "2020-08-16",
      note: "The Vortex GitHub is public now. Please check it out.",
      href: "https://github.com/vortexgpgpu/", cta: "Go to GitHub" },
    { title: "Vortex GitHub is now public", date: "2020-06-29",
      note: "Vortex has migrated into a public version of GitHub. The git version of Vortex is tested on an Arria 10 FPGA." },
    { title: "Vortex paper gets poster at Hot Chips", date: "2020-05-29",
      note: "The Vortex paper is accepted as a poster at Hot Chips.",
      href: "https://www.hotchips.org/program/", cta: "Hot Chips program" },
    { title: "Vortex arXiv paper gets media attention", date: "2020-03-04",
      note: "Covered by Hackster.io, RISC-V International, and Khronos.",
      href: "https://riscv.org/2020/03/vortex-brings-the-risc-v-isa-to-the-world-of-opencl-compatible-general-purpose-gpus-gareth-halfacree-hackster-io/",
      cta: "Read coverage" }
  ],

  /* ---------- workshops & tutorials ---------- */
  tutorials: [
    { year: 2026, title: "Vortex Workshop and Tutorial at MICRO 2026",
      subtitle: "Workshop and Tutorial", date: "MICRO 2026 · Athens, Greece", href: "micro2026.html",
      note: "Call for papers open.", upcoming: true },
    { year: 2025, title: "Vortex Workshop and Tutorial at MICRO 2025",
      subtitle: "Workshop and Tutorial", date: "18 October 2025", href: "micro2025.html",
      note: "Co-located with MICRO 2025." },
    { year: 2024, title: "Vortex Workshop and Tutorial at MICRO 2024",
      subtitle: "Workshop and Tutorial", date: "3 November 2024", href: "micro2024.html",
      note: "Half-day tutorial followed by three workshop presentations." },
    { year: 2023, title: "Vortex Tutorial at MICRO 2023",
      subtitle: "Open-Source RISC-V Based GPGPU (Vortex) and Their Usage Cases", date: "29 October 2023", href: "micro2023.html" },
    { year: 2022, title: "Vortex Tutorial at MICRO 2022",
      subtitle: "Open-Source RISC-V Based GPGPU: Vortex and Drone Applications on FPGA", date: "1 October 2022", href: "micro2022.html" },
    { year: 2021, title: "Vortex Tutorial at MICRO 2021",
      subtitle: "Open-Source RISC-V Based GPGPU", date: "18 October 2021", href: "micro2021.html" }
  ],

  /* ---------- blog ---------- */
  blog: [
    { title: "64-bit Extension for Vortex",
      authors: "Rohit Mundada, Hitharth Shajwani, Samarth Agarwal (BITS Pilani)",
      href: "blog-64bit.html",
      excerpt: "Learning the Vortex codebase through six hands-on assignments, then parameterizing the RTL to extend the design from 32-bit to the RISC-V 64-bit ISA." },
    { title: "SimX Implementation of Cache in Vortex and a HW Prefetcher Design",
      authors: "Vora Mihir Ketan (BITS Pilani)",
      href: "blog-prefetcher.html",
      excerpt: "A walk through the Vortex memory hierarchy and its SimX cache model, plus the design and implementation of a stride prefetcher in the data cache." }
  ],

  /* ---------- teams ---------- */
  faculty: [
    { name: "Hyesoon Kim", role: "Professor", org: "Georgia Tech",
      img: "https://i.imgur.com/GKlxeEq.jpg", site: "https://hyesoon.github.io/" },
    { name: "Blaise Tine", role: "Assistant Professor", org: "UCLA",
      img: "https://i.imgur.com/L7D3VDJ.jpg", site: "https://blaisetine.github.io/" },
    { name: "Jeffrey Young", role: "Research Scientist", org: "Georgia Tech",
      img: "https://sites.gatech.edu/hparch/files/2023/08/jyoung_headshot.jpg", site: "https://jyoung3131.github.io/" }
  ],
  members: [
    { name: "Chihyo (Mark) Ahn", role: "SW", org: "Georgia Tech",
      img: "https://sites.gatech.edu/hparch/files/2023/03/Chihyo-1024x1024.jpg", site: "https://chihyoa.github.io/" },
    { name: "Shinnung Jeong", role: "SW", org: "Georgia Tech",
      img: "assets/img/team/shinnung-jeong.jpg", site: "https://shin0403.github.io/" },
    { name: "Huanzhi Pu", role: "SW", org: "Georgia Tech",
      img: "https://sites.gatech.edu/hparch/files/2025/01/Huanzhi.jpg" },
    { name: "Saurabh Singh", role: "HW", org: "Georgia Tech",
      img: "https://sites.gatech.edu/hparch/files/2023/09/saurabh_singh-edited.jpg", site: "https://sites.google.com/view/saursin" },
    { name: "Liam Cooper", role: "HW", org: "Georgia Tech", img: "https://sites.gatech.edu/hparch/files/2023/03/placeholder2.jpg" },
    { name: "Eric Lorimer", role: "SW", org: "Georgia Tech",
      img: "https://sites.gatech.edu/hparch/files/2025/01/1516566335103.jpg" }
  ],
  alumni: [
    { name: "Fares Elsabbagh", role: "HW", org: "", img: "https://i.imgur.com/H6uaoXy.png" },
    { name: "Ruobing Han", role: "SW", org: "Georgia Tech", img: "https://i.imgur.com/zxQiN7w.jpeg" },
    { name: "Jaewon Lee", role: "SW", org: "Georgia Tech", img: "https://i.imgur.com/2MrT2ID.jpg" },
    { name: "Jaewoong Sim", role: "SW", org: "Seoul National University", img: "https://sites.gatech.edu/hparch/files/2023/03/placeholder2.jpg" }
  ],

  /* Sponsors. `img` is optional — tiles without a usable image fall back to a
     styled text wordmark, and the same fallback fires if an image fails to load.
     To de-hotlink, drop files into assets/img/sponsors/ and point `img` there. */
  sponsors: [
    { name: "Laboratory for Physical Sciences", short: "LPS",
      img: "https://bpb-us-e1.wpmucdn.com/blog.umd.edu/dist/4/875/files/2021/03/LPS-Website-logo2.png" },
    { name: "Lawrence Livermore National Laboratory", short: "LLNL",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Lawrence_Livermore_National_Laboratory_logo.svg/1280px-Lawrence_Livermore_National_Laboratory_logo.svg.png" },
    { name: "Samsung", short: "Samsung",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Samsung_wordmark.svg/1280px-Samsung_wordmark.svg.png" },
    { name: "AMD", short: "AMD",
      img: "https://commons.wikimedia.org/wiki/Special:FilePath/AMD_Logo.svg?width=512" },
    { name: "Intel", short: "Intel",
      img: "https://commons.wikimedia.org/wiki/Special:FilePath/Intel_logo_2023.svg?width=512" },
    { name: "SiliconArts", short: "SiliconArts", img: "https://i.imgur.com/wbEXYsG.jpg?2" },
    { name: "Oak Ridge National Laboratory", short: "Oak Ridge", img: "https://i.imgur.com/0LKZZSy.jpg" },
    { name: "National Science Foundation", short: "NSF",
      img: "https://commons.wikimedia.org/wiki/Special:FilePath/NSF_logo.svg?width=512" }
  ],

  contributors: [
    { term: "2026 Fall", people: ["Thomas Weatherly", "Mingjun Xu", "Vincent Pham", "Aaron Kantsevoy", "Chulhyung Park"] },
    { term: "2026 Summer", people: ["Thomas Weatherly", "Mingjun Xu", "Chulhyung Park", "Hanxiang Hao", "Mitul Tandon"] },
    { term: "2026 Spring", people: ["Thomas Weatherly", "Jack Cochran", "Mingjun Xu", "Vincent Pham", "Abhijay Achukola", "Aaron Kantsevoy", "Chulhyung Park"] },
    { term: "2025 Fall", people: ["Jordan Beiler", "Pulkit Goel", "Anurag Yadav", "Jagadheesvaran Tirupathi Subburayan", "Rahul Raj D N", "Niraj Kamal Karunanidhi", "Vincent Pham", "Shreyashi Dutta", "Abhijay Achukola", "Ahmed Khalaf", "Krishil R. Gandhi"] },
    { term: "2025 Summer", people: ["Mitul Tandon", "Mehlam Songerwala", "Jordan Beiler", "Mrunal Chourey"] },
    { term: "2025 Spring", people: ["Dhruv Raj Bangad", "Pulkit Goel", "Anurag Yadav", "Jagadheesvaran Tirupathi Subburayan", "Rahul Raj D N", "Muyao Xiao"] },
    { term: "2024 Fall", people: ["Alexander Perikles Kranias", "Tomás Contreras Casals", "Kinshuk Phalke"] },
    { term: "2024 Summer", people: ["Rishabh Ravi"] },
    { term: "2024 Spring", people: ["Aditya Potluri", "Varsha Singhania", "Udit Subramanya", "Rijul Radhu", "Sophia Baker", "Sreemanth Prathipati", "Nayan Sivakumar Nair", "Hanran Wu", "Hena Naaz"] },
    { term: "2023 Fall", people: ["Austin Weatherly", "Aditya Potluri", "Varsha Singhania", "Udit Subramanya", "Pranav V C", "Praeek Udpadhay", "Rijul Radhu", "Sibi Renganatth Sudhakar", "Nagasayee Guduru Gopalakrishna"] },
    { term: "2023 Summer", people: ["Amod Nijasure", "Shreyas Hebbar", "Kelvin Hau", "Lohith Artham", "Zheng Zhang", "Udit Subramanya"] },
    { term: "2023 Spring", people: ["Kartik Angadi", "Haotian Sheng", "Austin Weatherly", "Vandita Shetty", "Swetha Rajagopalan", "Lohith Artham", "Sibi Renganatth Sudhakar", "Varun Saxena", "Atrey Hosmane", "Shashank Holla", "Naga Ram Jaswanth Chunduru", "Yahya S. Al Hinai", "Pranav V C", "Gaurav Basu", "Rushabh Jignesh Shah", "Fadi Alzammar"] },
    { term: "2022 Fall", people: ["Krithika Kandasamy", "Naga Ram Jaswanth Chunduru", "Arvind Nataraj Sivasankar", "Haotian Sheng", "Izabela Hadula", "Samarth Agarwal", "Rohit Rahul Mundada", "Hitarth Girish Shajwani"] },
    { term: "2022 Summer", people: ["Haotian Sheng", "Rohit Rahul Mundada"] },
    { term: "2022 Spring", people: ["Mihir Vora Ketan", "Saurabh Singh", "Venkata Hanuma Balemarthy", "Varun Saxena", "Anusha Sumbetla", "Tejaswini Anand Kumar", "Swetha Rajagopalan", "Liam Cooper", "Santosh Raghav Srivatsan", "Prachi Sinha", "Santhana Bharathi Narasimmachari"] },
    { term: "2021 Spring", people: ["Srikar S. Tallapragada", "Swetha Rajagopalan", "Navneet Lingala", "Varun Valada"] },
    { term: "2020 Summer", people: ["Taejoon Park", "Tiffany (Carter) Montgomery", "Malik Burton", "Parris John T"] },
    { term: "2020 Spring", people: ["Apurve Chawda", "Will Gulian", "Yaotian Feng", "Carter Montgomery", "Saloni Oswal", "Santhosh Kumar", "Krishna Yalamarthy", "Kanghong Yan"] },
    { term: "2019 Fall", people: ["Priyadarshini Roshan", "Ethan Lyons", "Euna Kim", "Da Eun Shim", "Lingjun Zhu", "Sung Kyu Lim"] },
    { term: "2019 Spring", people: ["Bahar Asgari", "Sudhakar Yalamanchili"] }
  ],

  contributorNote:
    "We are looking for students to work on the project. Undergraduate and graduate students who have backgrounds in any of the following are all welcome: FPGA, computer architecture, GPU, and GPGPU. If you are interested, please send an email to vortexgpu@cc.gatech.edu.",

  /* ---------- community ---------- */
  community: [
    { icon: "◧", title: "GitHub",
      body: "View Vortex's source code, open issues, and contribute on our GitHub organization.",
      cta: "Go to GitHub", href: "https://github.com/vortexgpgpu/" },
    { icon: "◐", title: "Mailing List",
      body: "The mailing list is the direct line to developers, users, and contributors — questions get answered here, and monthly developer meeting invitations go out to the list. Sign up with the form below.",
      cta: "Sign up for the mailing list",
      href: "https://docs.google.com/forms/d/1r8E-Yo5NwA45Hi3-kEwte4AxK0mBsYDwgjM6Bul4so0/viewform" },
    { icon: "◪", title: "Developer Meeting",
      body: "We hold a Vortex developer meeting every month to review ongoing work, discuss contributions, and plan releases. Sign up for the mailing list and the invitation will be emailed to you.",
      cta: "Get the invitation",
      href: "https://docs.google.com/forms/d/1r8E-Yo5NwA45Hi3-kEwte4AxK0mBsYDwgjM6Bul4so0/viewform" },
    { icon: "◑", title: "Tutorials",
      body: "Slides, hands-on exercises, and assignments from every Vortex tutorial are kept in the tutorials repository.",
      cta: "Go to tutorials", href: "https://github.com/vortexgpgpu/vortex_tutorials" },
    { icon: "◒", title: "Contact",
      body: "Questions about joining the project, collaborations, or the workshop? Email the Vortex team directly.",
      cta: "Email the team", href: "mailto:vortexgpu@cc.gatech.edu" }
  ]
};
