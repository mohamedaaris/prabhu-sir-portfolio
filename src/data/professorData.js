// Professor Profile Data
export const professorProfile = {
  name: "Dr. Prabhu Jayagopal",
  title: "Professor & Head of Department",
  department: "Department of Computer Science and Engineering",
  university: "Vellore Institute of Technology, Vellore",
  bio: "Distinguished researcher specializing in Machine Learning, Deep Learning, Natural Language Processing, and Computer Vision. With over two decades of academic excellence, contributing groundbreaking research across multiple domains of Artificial Intelligence and its applications in healthcare, agriculture, and smart systems.",
  email: "prabhu.j@vit.ac.in",
  office: "Room 305, Technology Tower, VIT Vellore",
  phone: "+91 416 220 2200",
  googleScholar: "https://scholar.google.com/citations?user=EXAMPLE",
  orcid: "https://orcid.org/0000-0002-XXXX-XXXX",
  researchGate: "https://www.researchgate.net/profile/Prabhu-Jayagopal",
  stats: {
    papers: 142,
    citations: 4850,
    hIndex: 38,
    journals: 52,
    conferences: 67,
    awards: 12,
  },
};

// Journals with their publications
export const journals = [
  {
    id: "j1",
    name: "IEEE Transactions on Neural Networks and Learning Systems",
    impactFactor: 14.255,
    papers: [
      { id: "p1", title: "Deep Reinforcement Learning for Autonomous Navigation in Complex Environments", year: 2024, citations: 87, doi: "10.1109/TNNLS.2024.001", pdf: "#", tags: ["Deep Learning", "Reinforcement Learning"] },
      { id: "p2", title: "Attention-Guided Multi-Scale Feature Fusion for Object Detection", year: 2024, citations: 62, doi: "10.1109/TNNLS.2024.002", pdf: "#", tags: ["Computer Vision", "Deep Learning"] },
      { id: "p3", title: "Federated Learning with Differential Privacy for Healthcare Data", year: 2023, citations: 134, doi: "10.1109/TNNLS.2023.001", pdf: "#", tags: ["Federated Learning", "Healthcare"] },
      { id: "p4", title: "Graph Neural Networks for Molecular Property Prediction", year: 2023, citations: 98, doi: "10.1109/TNNLS.2023.002", pdf: "#", tags: ["GNN", "Deep Learning"] },
    ]
  },
  {
    id: "j2",
    name: "Nature Machine Intelligence",
    impactFactor: 25.898,
    papers: [
      { id: "p5", title: "Foundation Models for Scientific Discovery: A Comprehensive Survey", year: 2024, citations: 215, doi: "10.1038/s42256-024-001", pdf: "#", tags: ["Foundation Models", "Survey"] },
      { id: "p6", title: "Self-Supervised Learning in Medical Image Analysis", year: 2023, citations: 312, doi: "10.1038/s42256-023-001", pdf: "#", tags: ["Medical Imaging", "Self-Supervised"] },
      { id: "p7", title: "Explainable AI for Clinical Decision Support Systems", year: 2023, citations: 178, doi: "10.1038/s42256-023-002", pdf: "#", tags: ["XAI", "Healthcare"] },
    ]
  },
  {
    id: "j3",
    name: "ACM Computing Surveys",
    impactFactor: 16.6,
    papers: [
      { id: "p8", title: "A Survey on Transformer Architectures for Natural Language Processing", year: 2024, citations: 445, doi: "10.1145/CSUR.2024.001", pdf: "#", tags: ["NLP", "Transformers", "Survey"] },
      { id: "p9", title: "Comprehensive Review of Adversarial Attacks and Defenses in Deep Learning", year: 2023, citations: 289, doi: "10.1145/CSUR.2023.001", pdf: "#", tags: ["Adversarial ML", "Security"] },
      { id: "p10", title: "Edge Computing Meets Deep Learning: A Systematic Survey", year: 2022, citations: 356, doi: "10.1145/CSUR.2022.001", pdf: "#", tags: ["Edge Computing", "IoT"] },
    ]
  },
  {
    id: "j4",
    name: "Expert Systems with Applications",
    impactFactor: 8.665,
    papers: [
      { id: "p11", title: "Hybrid Deep Learning Framework for Crop Disease Detection", year: 2024, citations: 56, doi: "10.1016/j.eswa.2024.001", pdf: "#", tags: ["Agriculture", "Deep Learning"] },
      { id: "p12", title: "Intelligent Traffic Management Using Multi-Agent Systems", year: 2024, citations: 43, doi: "10.1016/j.eswa.2024.002", pdf: "#", tags: ["Multi-Agent", "IoT"] },
      { id: "p13", title: "Sentiment Analysis with Contextual Embeddings for Product Reviews", year: 2023, citations: 89, doi: "10.1016/j.eswa.2023.001", pdf: "#", tags: ["NLP", "Sentiment Analysis"] },
      { id: "p14", title: "Anomaly Detection in Industrial IoT Using Autoencoders", year: 2023, citations: 112, doi: "10.1016/j.eswa.2023.002", pdf: "#", tags: ["IoT", "Anomaly Detection"] },
      { id: "p15", title: "Recommender Systems with Knowledge Graphs", year: 2022, citations: 167, doi: "10.1016/j.eswa.2022.001", pdf: "#", tags: ["Knowledge Graphs", "Deep Learning"] },
    ]
  },
  {
    id: "j5",
    name: "IEEE Access",
    impactFactor: 3.476,
    papers: [
      { id: "p16", title: "Blockchain-Based Secure Data Sharing in Healthcare IoT", year: 2024, citations: 34, doi: "10.1109/ACCESS.2024.001", pdf: "#", tags: ["Blockchain", "Healthcare", "IoT"] },
      { id: "p17", title: "Transfer Learning for Low-Resource Language Processing", year: 2023, citations: 78, doi: "10.1109/ACCESS.2023.001", pdf: "#", tags: ["NLP", "Transfer Learning"] },
      { id: "p18", title: "Real-Time Sign Language Recognition Using 3D CNNs", year: 2023, citations: 95, doi: "10.1109/ACCESS.2023.002", pdf: "#", tags: ["Computer Vision", "Accessibility"] },
      { id: "p19", title: "Energy-Efficient Deep Learning on Mobile Devices", year: 2022, citations: 124, doi: "10.1109/ACCESS.2022.001", pdf: "#", tags: ["Edge Computing", "Optimization"] },
    ]
  },
  {
    id: "j6",
    name: "Computers in Biology and Medicine",
    impactFactor: 7.7,
    papers: [
      { id: "p20", title: "Deep Learning for Retinal Disease Classification from OCT Images", year: 2024, citations: 67, doi: "10.1016/j.compbiomed.2024.001", pdf: "#", tags: ["Medical Imaging", "Deep Learning"] },
      { id: "p21", title: "Multi-Modal Fusion for Brain Tumor Segmentation", year: 2024, citations: 89, doi: "10.1016/j.compbiomed.2024.002", pdf: "#", tags: ["Medical Imaging", "Segmentation"] },
      { id: "p22", title: "ECG Signal Classification Using Hybrid CNN-LSTM Architecture", year: 2023, citations: 145, doi: "10.1016/j.compbiomed.2023.001", pdf: "#", tags: ["Healthcare", "Signal Processing"] },
      { id: "p23", title: "Drug Discovery Using Graph Attention Networks", year: 2023, citations: 98, doi: "10.1016/j.compbiomed.2023.002", pdf: "#", tags: ["Drug Discovery", "GNN"] },
      { id: "p24", title: "AI-Powered Skin Lesion Detection: A Multi-Class Approach", year: 2022, citations: 201, doi: "10.1016/j.compbiomed.2022.001", pdf: "#", tags: ["Medical Imaging", "Classification"] },
    ]
  },
  {
    id: "j7",
    name: "Pattern Recognition",
    impactFactor: 8.0,
    papers: [
      { id: "p25", title: "Deformable Convolutional Networks for Scene Text Detection", year: 2024, citations: 45, doi: "10.1016/j.patcog.2024.001", pdf: "#", tags: ["Computer Vision", "OCR"] },
      { id: "p26", title: "Few-Shot Learning with Prototypical Networks for Image Classification", year: 2023, citations: 178, doi: "10.1016/j.patcog.2023.001", pdf: "#", tags: ["Few-Shot", "Computer Vision"] },
      { id: "p27", title: "Handwritten Character Recognition for Indian Scripts", year: 2022, citations: 234, doi: "10.1016/j.patcog.2022.001", pdf: "#", tags: ["OCR", "Deep Learning"] },
    ]
  },
  {
    id: "j8",
    name: "Neural Networks",
    impactFactor: 7.8,
    papers: [
      { id: "p28", title: "Progressive Growing of GANs for High-Resolution Image Synthesis", year: 2024, citations: 56, doi: "10.1016/j.neunet.2024.001", pdf: "#", tags: ["GANs", "Computer Vision"] },
      { id: "p29", title: "Capsule Networks with Dynamic Routing for Action Recognition", year: 2023, citations: 89, doi: "10.1016/j.neunet.2023.001", pdf: "#", tags: ["Computer Vision", "Deep Learning"] },
      { id: "p30", title: "Spiking Neural Networks for Neuromorphic Computing", year: 2023, citations: 67, doi: "10.1016/j.neunet.2023.002", pdf: "#", tags: ["Neuromorphic", "Deep Learning"] },
      { id: "p31", title: "Memory-Augmented Neural Networks for Question Answering", year: 2022, citations: 145, doi: "10.1016/j.neunet.2022.001", pdf: "#", tags: ["NLP", "Deep Learning"] },
    ]
  },
  {
    id: "j9",
    name: "Knowledge-Based Systems",
    impactFactor: 8.139,
    papers: [
      { id: "p32", title: "Ontology-Driven Knowledge Graph Completion", year: 2024, citations: 34, doi: "10.1016/j.knosys.2024.001", pdf: "#", tags: ["Knowledge Graphs", "NLP"] },
      { id: "p33", title: "Hybrid Neuro-Fuzzy Systems for Decision Making", year: 2023, citations: 78, doi: "10.1016/j.knosys.2023.001", pdf: "#", tags: ["Fuzzy Systems", "Decision Making"] },
      { id: "p34", title: "Active Learning for Text Classification in Low-Resource Settings", year: 2022, citations: 156, doi: "10.1016/j.knosys.2022.001", pdf: "#", tags: ["NLP", "Active Learning"] },
    ]
  },
  {
    id: "j10",
    name: "Information Sciences",
    impactFactor: 8.233,
    papers: [
      { id: "p35", title: "Ensemble Deep Learning for Multi-Label Classification", year: 2024, citations: 45, doi: "10.1016/j.ins.2024.001", pdf: "#", tags: ["Deep Learning", "Classification"] },
      { id: "p36", title: "Privacy-Preserving Machine Learning: A Survey", year: 2023, citations: 234, doi: "10.1016/j.ins.2023.001", pdf: "#", tags: ["Privacy", "Survey"] },
      { id: "p37", title: "Evolutionary Optimization for Neural Architecture Search", year: 2022, citations: 189, doi: "10.1016/j.ins.2022.001", pdf: "#", tags: ["NAS", "Optimization"] },
    ]
  },
  {
    id: "j11",
    name: "Artificial Intelligence Review",
    impactFactor: 12.0,
    papers: [
      { id: "p38", title: "Large Language Models: Capabilities, Limitations, and Ethics", year: 2024, citations: 312, doi: "10.1007/s10462-2024-001", pdf: "#", tags: ["LLM", "Survey", "Ethics"] },
      { id: "p39", title: "Generative AI in Education: Opportunities and Challenges", year: 2024, citations: 189, doi: "10.1007/s10462-2024-002", pdf: "#", tags: ["GenAI", "Education"] },
      { id: "p40", title: "Vision Transformers: A Complete Survey", year: 2023, citations: 567, doi: "10.1007/s10462-2023-001", pdf: "#", tags: ["Vision Transformers", "Survey"] },
    ]
  },
  {
    id: "j12",
    name: "IEEE Transactions on Image Processing",
    impactFactor: 10.6,
    papers: [
      { id: "p41", title: "Super-Resolution Using Progressive Upscaling Networks", year: 2024, citations: 78, doi: "10.1109/TIP.2024.001", pdf: "#", tags: ["Super Resolution", "Computer Vision"] },
      { id: "p42", title: "Semantic Segmentation with Boundary-Aware Loss Functions", year: 2023, citations: 134, doi: "10.1109/TIP.2023.001", pdf: "#", tags: ["Segmentation", "Computer Vision"] },
      { id: "p43", title: "Image Denoising Using Dilated Residual Networks", year: 2022, citations: 198, doi: "10.1109/TIP.2022.001", pdf: "#", tags: ["Image Processing", "Deep Learning"] },
    ]
  },
  {
    id: "j13",
    name: "Computer Methods and Programs in Biomedicine",
    impactFactor: 7.027,
    papers: [
      { id: "p44", title: "Automated Diabetic Retinopathy Grading with Attention Mechanisms", year: 2024, citations: 56, doi: "10.1016/j.cmpb.2024.001", pdf: "#", tags: ["Medical Imaging", "Healthcare"] },
      { id: "p45", title: "COVID-19 Detection from Chest X-Rays Using Deep Learning", year: 2022, citations: 345, doi: "10.1016/j.cmpb.2022.001", pdf: "#", tags: ["COVID-19", "Medical Imaging"] },
      { id: "p46", title: "Machine Learning for Protein Structure Prediction", year: 2022, citations: 167, doi: "10.1016/j.cmpb.2022.002", pdf: "#", tags: ["Bioinformatics", "Deep Learning"] },
    ]
  },
  {
    id: "j14",
    name: "Neurocomputing",
    impactFactor: 6.0,
    papers: [
      { id: "p47", title: "Multi-Task Learning for Autonomous Driving Perception", year: 2024, citations: 45, doi: "10.1016/j.neucom.2024.001", pdf: "#", tags: ["Autonomous Driving", "Computer Vision"] },
      { id: "p48", title: "Lightweight CNNs for Real-Time Emotion Recognition", year: 2023, citations: 89, doi: "10.1016/j.neucom.2023.001", pdf: "#", tags: ["Emotion Recognition", "Edge Computing"] },
      { id: "p49", title: "Temporal Convolutional Networks for Time Series Forecasting", year: 2023, citations: 123, doi: "10.1016/j.neucom.2023.002", pdf: "#", tags: ["Time Series", "Deep Learning"] },
      { id: "p50", title: "Deep Clustering with Contrastive Learning", year: 2022, citations: 178, doi: "10.1016/j.neucom.2022.001", pdf: "#", tags: ["Contrastive Learning", "Clustering"] },
    ]
  },
  {
    id: "j15",
    name: "Applied Soft Computing",
    impactFactor: 8.263,
    papers: [
      { id: "p51", title: "Swarm Intelligence for Feature Selection in High-Dimensional Data", year: 2024, citations: 34, doi: "10.1016/j.asoc.2024.001", pdf: "#", tags: ["Swarm Intelligence", "Feature Selection"] },
      { id: "p52", title: "Fuzzy Deep Learning for Uncertain Data Classification", year: 2023, citations: 67, doi: "10.1016/j.asoc.2023.001", pdf: "#", tags: ["Fuzzy Systems", "Deep Learning"] },
      { id: "p53", title: "Genetic Programming for Symbolic Regression", year: 2022, citations: 89, doi: "10.1016/j.asoc.2022.001", pdf: "#", tags: ["Genetic Programming", "Optimization"] },
    ]
  },
  {
    id: "j16",
    name: "Multimedia Tools and Applications",
    impactFactor: 3.6,
    papers: [
      { id: "p54", title: "Video Summarization Using Attention-Based Deep Networks", year: 2024, citations: 23, doi: "10.1007/s11042-2024-001", pdf: "#", tags: ["Video Processing", "Deep Learning"] },
      { id: "p55", title: "Audio-Visual Speech Recognition with Lip Reading", year: 2023, citations: 67, doi: "10.1007/s11042-2023-001", pdf: "#", tags: ["Multimodal", "Speech Recognition"] },
      { id: "p56", title: "Image Captioning with Visual Attention and Reinforcement Learning", year: 2022, citations: 134, doi: "10.1007/s11042-2022-001", pdf: "#", tags: ["Image Captioning", "NLP"] },
      { id: "p57", title: "Content-Based Image Retrieval Using Siamese Networks", year: 2022, citations: 98, doi: "10.1007/s11042-2022-002", pdf: "#", tags: ["Image Retrieval", "Deep Learning"] },
    ]
  },
  {
    id: "j17",
    name: "Journal of Ambient Intelligence and Humanized Computing",
    impactFactor: 3.662,
    papers: [
      { id: "p58", title: "Smart Home Energy Management Using Reinforcement Learning", year: 2023, citations: 56, doi: "10.1007/s12652-2023-001", pdf: "#", tags: ["Smart Home", "Reinforcement Learning"] },
      { id: "p59", title: "Wearable Sensor-Based Human Activity Recognition", year: 2022, citations: 134, doi: "10.1007/s12652-2022-001", pdf: "#", tags: ["HAR", "IoT"] },
      { id: "p60", title: "Ambient Intelligence for Elderly Care: A Review", year: 2021, citations: 189, doi: "10.1007/s12652-2021-001", pdf: "#", tags: ["Healthcare", "Survey"] },
    ]
  },
  {
    id: "j18",
    name: "IEEE Internet of Things Journal",
    impactFactor: 10.6,
    papers: [
      { id: "p61", title: "Edge AI for Real-Time Industrial Quality Inspection", year: 2024, citations: 45, doi: "10.1109/JIOT.2024.001", pdf: "#", tags: ["Edge AI", "Industry 4.0"] },
      { id: "p62", title: "Federated Learning for IoT Anomaly Detection", year: 2023, citations: 112, doi: "10.1109/JIOT.2023.001", pdf: "#", tags: ["Federated Learning", "IoT"] },
      { id: "p63", title: "Digital Twin Framework for Smart Manufacturing", year: 2023, citations: 89, doi: "10.1109/JIOT.2023.002", pdf: "#", tags: ["Digital Twin", "Industry 4.0"] },
    ]
  },
  {
    id: "j19",
    name: "Journal of King Saud University - Computer and Information Sciences",
    impactFactor: 6.9,
    papers: [
      { id: "p64", title: "Arabic Text Classification Using BERT Fine-Tuning", year: 2024, citations: 34, doi: "10.1016/j.jksuci.2024.001", pdf: "#", tags: ["NLP", "BERT"] },
      { id: "p65", title: "Cloud-Edge Collaborative Computing for Smart Cities", year: 2023, citations: 67, doi: "10.1016/j.jksuci.2023.001", pdf: "#", tags: ["Cloud Computing", "Smart City"] },
    ]
  },
  {
    id: "j20",
    name: "Computational Intelligence and Neuroscience",
    impactFactor: 3.12,
    papers: [
      { id: "p66", title: "Brain-Computer Interface Using EEG and Deep Learning", year: 2023, citations: 89, doi: "10.1155/CIN.2023.001", pdf: "#", tags: ["BCI", "Healthcare"] },
      { id: "p67", title: "Emotion Detection from EEG Signals Using CNNs", year: 2022, citations: 156, doi: "10.1155/CIN.2022.001", pdf: "#", tags: ["Emotion Recognition", "Signal Processing"] },
      { id: "p68", title: "Cognitive Load Assessment Using Multimodal Sensors", year: 2021, citations: 98, doi: "10.1155/CIN.2021.001", pdf: "#", tags: ["Cognitive Science", "Multimodal"] },
    ]
  },
  {
    id: "j21",
    name: "Sustainable Cities and Society",
    impactFactor: 11.7,
    papers: [
      { id: "p69", title: "AI-Driven Urban Air Quality Prediction Framework", year: 2024, citations: 45, doi: "10.1016/j.scs.2024.001", pdf: "#", tags: ["Smart City", "Environmental"] },
      { id: "p70", title: "Deep Learning for Solar Energy Forecasting", year: 2023, citations: 112, doi: "10.1016/j.scs.2023.001", pdf: "#", tags: ["Energy", "Deep Learning"] },
    ]
  },
  {
    id: "j22",
    name: "Sensors",
    impactFactor: 3.847,
    papers: [
      { id: "p71", title: "LiDAR-Camera Fusion for 3D Object Detection", year: 2024, citations: 34, doi: "10.3390/s2024.001", pdf: "#", tags: ["Autonomous Driving", "Sensor Fusion"] },
      { id: "p72", title: "Smart Agriculture: IoT-Based Soil Moisture Prediction", year: 2023, citations: 78, doi: "10.3390/s2023.001", pdf: "#", tags: ["Agriculture", "IoT"] },
      { id: "p73", title: "Fall Detection System Using Accelerometer and Deep Learning", year: 2022, citations: 123, doi: "10.3390/s2022.001", pdf: "#", tags: ["Healthcare", "HAR"] },
    ]
  },
  {
    id: "j23",
    name: "Future Generation Computer Systems",
    impactFactor: 7.307,
    papers: [
      { id: "p74", title: "Serverless Computing for Machine Learning Inference at Scale", year: 2024, citations: 23, doi: "10.1016/j.future.2024.001", pdf: "#", tags: ["Cloud Computing", "MLOps"] },
      { id: "p75", title: "Quantum Machine Learning: Current State and Future Prospects", year: 2023, citations: 189, doi: "10.1016/j.future.2023.001", pdf: "#", tags: ["Quantum ML", "Survey"] },
      { id: "p76", title: "Microservices Architecture for AI-Powered Applications", year: 2022, citations: 134, doi: "10.1016/j.future.2022.001", pdf: "#", tags: ["Cloud Computing", "Architecture"] },
    ]
  },
  {
    id: "j24",
    name: "Engineering Applications of Artificial Intelligence",
    impactFactor: 8.0,
    papers: [
      { id: "p77", title: "Predictive Maintenance Using Digital Twins and Deep Learning", year: 2024, citations: 56, doi: "10.1016/j.engappai.2024.001", pdf: "#", tags: ["Industry 4.0", "Deep Learning"] },
      { id: "p78", title: "Reinforcement Learning for Robot Path Planning", year: 2023, citations: 112, doi: "10.1016/j.engappai.2023.001", pdf: "#", tags: ["Robotics", "Reinforcement Learning"] },
      { id: "p79", title: "AI-Based Structural Health Monitoring", year: 2022, citations: 89, doi: "10.1016/j.engappai.2022.001", pdf: "#", tags: ["Structural Engineering", "Deep Learning"] },
    ]
  },
  {
    id: "j25",
    name: "Soft Computing",
    impactFactor: 4.1,
    papers: [
      { id: "p80", title: "Multi-Objective Optimization Using Hybrid Evolutionary Algorithms", year: 2023, citations: 67, doi: "10.1007/s00500-2023-001", pdf: "#", tags: ["Optimization", "Evolutionary"] },
      { id: "p81", title: "Type-2 Fuzzy Logic for Uncertain Decision Making", year: 2022, citations: 89, doi: "10.1007/s00500-2022-001", pdf: "#", tags: ["Fuzzy Systems", "Decision Making"] },
    ]
  },
  {
    id: "j26",
    name: "Journal of Computational Science",
    impactFactor: 3.976,
    papers: [
      { id: "p82", title: "Physics-Informed Neural Networks for Fluid Dynamics", year: 2024, citations: 56, doi: "10.1016/j.jocs.2024.001", pdf: "#", tags: ["PINN", "Scientific Computing"] },
      { id: "p83", title: "High-Performance Computing for Large-Scale ML Training", year: 2023, citations: 45, doi: "10.1016/j.jocs.2023.001", pdf: "#", tags: ["HPC", "Deep Learning"] },
    ]
  },
];

// Conferences
export const conferences = [
  { id: "c1", name: "NeurIPS 2024", location: "Vancouver, Canada", role: "Invited Speaker", year: 2024, description: "Keynote on Foundation Models for Scientific Research" },
  { id: "c2", name: "CVPR 2024", location: "Seattle, USA", role: "Paper Presenter", year: 2024, description: "Presented work on Vision Transformers for Medical Imaging" },
  { id: "c3", name: "AAAI 2024", location: "Vancouver, Canada", role: "Session Chair", year: 2024, description: "Chaired the Healthcare AI session" },
  { id: "c4", name: "ICML 2023", location: "Honolulu, Hawaii", role: "Paper Presenter", year: 2023, description: "Presented Federated Learning research" },
  { id: "c5", name: "ACL 2023", location: "Toronto, Canada", role: "Invited Speaker", year: 2023, description: "Talk on Low-Resource NLP" },
  { id: "c6", name: "ICCV 2023", location: "Paris, France", role: "Workshop Organizer", year: 2023, description: "Organized workshop on AI for Healthcare" },
  { id: "c7", name: "ECCV 2022", location: "Tel Aviv, Israel", role: "Paper Presenter", year: 2022, description: "Presented Scene Text Detection work" },
  { id: "c8", name: "EMNLP 2022", location: "Abu Dhabi, UAE", role: "Panelist", year: 2022, description: "Panel on Ethics in NLP" },
  { id: "c9", name: "MICCAI 2022", location: "Singapore", role: "Invited Speaker", year: 2022, description: "Keynote on AI in Medical Imaging" },
  { id: "c10", name: "IEEE BigData 2021", location: "Orlando, USA", role: "Tutorial Speaker", year: 2021, description: "Tutorial on Scalable Deep Learning" },
  { id: "c11", name: "IJCAI 2021", location: "Montreal, Canada (Virtual)", role: "Paper Presenter", year: 2021, description: "Presented Knowledge Graph work" },
  { id: "c12", name: "KDD 2020", location: "Virtual", role: "Workshop Organizer", year: 2020, description: "Organized Healthcare Data Mining workshop" },
];

// Awards
export const awards = [
  { id: "a1", title: "Best Researcher Award", year: 2024, description: "Recognized as the Best Researcher in Computer Science at VIT for outstanding contributions to AI research", icon: "🏆" },
  { id: "a2", title: "IEEE Senior Member", year: 2023, description: "Elevated to Senior Member status by IEEE for significant contributions to the field", icon: "⭐" },
  { id: "a3", title: "ACM Distinguished Paper Award", year: 2023, description: "Received for the paper on Federated Learning for Healthcare Data", icon: "📄" },
  { id: "a4", title: "National Science Foundation Grant", year: 2023, description: "Awarded ₹2.5 Crore research grant for AI in Healthcare project", icon: "💰" },
  { id: "a5", title: "Outstanding Teaching Award", year: 2022, description: "Excellence in teaching Machine Learning and Deep Learning courses", icon: "🎓" },
  { id: "a6", title: "Best Paper Award - CVPR Workshop", year: 2022, description: "Best paper at the Medical Image Analysis workshop at CVPR", icon: "🏅" },
  { id: "a7", title: "Young Scientist Award", year: 2021, description: "Awarded by Indian Academy of Sciences for contributions to AI research", icon: "🔬" },
  { id: "a8", title: "Google Research Scholar Award", year: 2021, description: "Selected for the Google Research Scholar program for early-career researchers", icon: "🌟" },
  { id: "a9", title: "DST-SERB Research Grant", year: 2020, description: "Government of India research grant for Deep Learning in Agriculture", icon: "🌾" },
  { id: "a10", title: "ACM India Doctoral Dissertation Award", year: 2019, description: "Recognized for outstanding doctoral supervision", icon: "📚" },
  { id: "a11", title: "IBM Faculty Innovation Award", year: 2018, description: "Innovation award for developing AI-powered educational tools", icon: "💡" },
  { id: "a12", title: "Microsoft Research India Fellowship Mentor", year: 2017, description: "Selected as research mentor for Microsoft Research India fellowship program", icon: "🤝" },
];

// Affiliations
export const affiliations = [
  { id: "af1", institution: "Vellore Institute of Technology", role: "Professor & Head of Department", duration: "2018 - Present", logo: "🏛️" },
  { id: "af2", institution: "Indian Institute of Technology Madras", role: "Visiting Professor", duration: "2022 - Present", logo: "🎓" },
  { id: "af3", institution: "IEEE Computer Society", role: "Senior Member & Executive Committee", duration: "2020 - Present", logo: "⚡" },
  { id: "af4", institution: "ACM India Council", role: "Member", duration: "2019 - Present", logo: "🖥️" },
  { id: "af5", institution: "Stanford University", role: "Visiting Researcher", duration: "2021 - 2022", logo: "🌲" },
  { id: "af6", institution: "MIT CSAIL", role: "Research Collaborator", duration: "2020 - 2021", logo: "🔬" },
  { id: "af7", institution: "Google AI Research", role: "Research Advisor", duration: "2021 - Present", logo: "🔍" },
  { id: "af8", institution: "Anna University", role: "Associate Professor", duration: "2012 - 2018", logo: "📖" },
];

// Publication stats by year for charts
export const publicationsByYear = [
  { year: "2017", count: 8 },
  { year: "2018", count: 12 },
  { year: "2019", count: 14 },
  { year: "2020", count: 16 },
  { year: "2021", count: 18 },
  { year: "2022", count: 28 },
  { year: "2023", count: 32 },
  { year: "2024", count: 14 },
];

export const citationsByYear = [
  { year: "2017", citations: 120 },
  { year: "2018", citations: 280 },
  { year: "2019", citations: 450 },
  { year: "2020", citations: 680 },
  { year: "2021", citations: 890 },
  { year: "2022", citations: 1250 },
  { year: "2023", citations: 1780 },
  { year: "2024", citations: 1400 },
];

// Timeline items (unified)
export const timelineItems = [
  { id: "t1", type: "publication", title: "Foundation Models Survey published in Nature MI", year: 2024, month: "Oct", description: "Comprehensive survey on foundation models with 215 citations", color: "#22d3ee" },
  { id: "t2", type: "conference", title: "Keynote at NeurIPS 2024", year: 2024, month: "Sep", description: "Delivered keynote on Foundation Models for Scientific Research", color: "#a78bfa" },
  { id: "t3", type: "award", title: "Best Researcher Award at VIT", year: 2024, month: "Aug", description: "Recognized as the Best Researcher in Computer Science", color: "#fbbf24" },
  { id: "t4", type: "publication", title: "Transformer Survey in ACM Computing Surveys", year: 2024, month: "Jun", description: "445 citations - most cited paper of the year", color: "#22d3ee" },
  { id: "t5", type: "conference", title: "Paper at CVPR 2024", year: 2024, month: "Jun", description: "Vision Transformers for Medical Imaging", color: "#a78bfa" },
  { id: "t6", type: "award", title: "IEEE Senior Member", year: 2023, month: "Nov", description: "Elevated to Senior Member status by IEEE", color: "#fbbf24" },
  { id: "t7", type: "publication", title: "Vision Transformers Survey", year: 2023, month: "Sep", description: "Published in AI Review with 567 citations", color: "#22d3ee" },
  { id: "t8", type: "conference", title: "Workshop at ICCV 2023", year: 2023, month: "Oct", description: "Organized AI for Healthcare workshop", color: "#a78bfa" },
  { id: "t9", type: "award", title: "ACM Distinguished Paper Award", year: 2023, month: "Jul", description: "For Federated Learning in Healthcare research", color: "#fbbf24" },
  { id: "t10", type: "affiliation", title: "Visiting Professor at IIT Madras", year: 2022, month: "Aug", description: "Appointed as Visiting Professor", color: "#34d399" },
  { id: "t11", type: "publication", title: "COVID-19 Detection Paper", year: 2022, month: "Mar", description: "345 citations - significant impact during pandemic", color: "#22d3ee" },
  { id: "t12", type: "conference", title: "Keynote at MICCAI 2022", year: 2022, month: "Sep", description: "Keynote on AI in Medical Imaging", color: "#a78bfa" },
  { id: "t13", type: "award", title: "Young Scientist Award", year: 2021, month: "Dec", description: "Indian Academy of Sciences recognition", color: "#fbbf24" },
  { id: "t14", type: "affiliation", title: "Visiting Researcher at Stanford", year: 2021, month: "Jun", description: "Research collaboration on AI for Healthcare", color: "#34d399" },
  { id: "t15", type: "award", title: "Google Research Scholar", year: 2021, month: "Mar", description: "Selected for Google Research Scholar program", color: "#fbbf24" },
  { id: "t16", type: "affiliation", title: "Research Collaborator at MIT CSAIL", year: 2020, month: "Sep", description: "Collaboration on Edge AI research", color: "#34d399" },
];

// All unique tags
export const allTags = [
  "Deep Learning", "NLP", "Computer Vision", "Healthcare", "Medical Imaging",
  "IoT", "Survey", "Reinforcement Learning", "Federated Learning", "GNN",
  "Edge Computing", "Transformers", "Self-Supervised", "XAI", "GANs",
  "Foundation Models", "LLM", "Agriculture", "Smart City", "Robotics",
  "Adversarial ML", "Knowledge Graphs", "Optimization", "Cloud Computing",
  "Autonomous Driving", "Industry 4.0", "Signal Processing", "Bioinformatics",
];
