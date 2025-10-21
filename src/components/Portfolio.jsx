import React from "react";
import QuestionBox from "../assets/portfolio_pics/QuestionBox.png";
import RandomQuoteGenerator from "../assets/portfolio_pics/RandomQuoteGenerator.png";
import VFierce from "../assets/portfolio_pics/VFierce.png";
import AmbulanceDetection from "../assets/portfolio_pics/AmbulanceDetection.png";
import SpeaKub from "../assets/portfolio_pics/speakub_image.png";
import NetworkVulnerability from "../assets/portfolio_pics/NetworkVulnerability.png";
import DataBreach from "../assets/portfolio_pics/DataBreach.png";
import ImageClassifier from "../assets/portfolio_pics/ImageClassifier.png";
import movieg from "../assets/portfolio_pics/movieg.png";
import CreditCard from "../assets/portfolio_pics/CreditCard.png";
import SMS from "../assets/portfolio_pics/SMS.png";

// Default placeholder for deep learning projects
const DeepLearningPlaceholder = null;

const Portfolio = () => {
  // Generate a consistent gradient based on project name
  const generateGradient = (name) => {
    const colors = [
      ['#667eea', '#764ba2'], // Purple-Blue
      ['#f093fb', '#f5576c'], // Pink-Red
      ['#4facfe', '#00f2fe'], // Blue-Cyan
      ['#43e97b', '#38f9d7'], // Green-Mint
      ['#fa709a', '#fee140'], // Pink-Yellow
      ['#a8edea', '#fed6e3'], // Mint-Pink
      ['#ffecd2', '#fcb69f'], // Orange-Peach
      ['#667eea', '#764ba2'], // Purple-Blue
    ];
    
    const hash = name.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
    
    const colorIndex = Math.abs(hash) % colors.length;
    return `linear-gradient(135deg, ${colors[colorIndex][0]}, ${colors[colorIndex][1]})`;
  };

  const portfolios = [
    {
      id: 1,
      name: "Ambulance Detection System",
      src: AmbulanceDetection,
      URL: "https://github.com/sahej-hira/Ambulance-Identification",
      description: "A web app that detects ambulance in real-time and custom changes traffic lights to let emergency vehicles pass.",
      button: "Code",
    },
    {
      id: 2,
      name: "SpeaKub",
      src: SpeaKub,
      URL: "https://speakub.qzz.io/",
      description: "A web app where we help users with anxiety management, communication skills and interview prep.",
      button: "Demo",
    },
    {
      id: 2,
      name: "Network Vulnerability assessment",
      src: NetworkVulnerability, 
      URL: "https://github.com/sahej-hira/Extion_Infotec/blob/main/Network%20Vulnerability%20Assessment.pdf",
      description: "A detailed PDF report on assessing network vulnerabilities and proposing security measures for a company's IT infrastructure.",
      button: "PDF",
    },
    {
      id: 2,
      name: "Investigation of Data Breach",
      src: DataBreach, 
      URL: "https://github.com/sahej-hira/Extion_Infotec/blob/main/Investigation%20of%20Data%20Breach%20Report.pdf",
      description: "A detailed PDF report on investigating a data breach incident, analyzing its impact, and recommending preventive measures.",
      button: "PDF",
    },
    {
      id: 24,
      name: "Movie Genre Classification",
      src: movieg,
      URL: "https://github.com/sahej-hira/codsoft_task/blob/main/task-1%3A%20Movie%20genre%20classification.ipynb",
      description: "Machine learning model to classify movies into genres based on plot summaries using natural language processing techniques.",
      button: "Code",
    },
    {
      id: 25,
      name: "Credit Card Fraud Detection",
      src: CreditCard,
      URL: "https://github.com/sahej-hira/codsoft_task/blob/main/task-2%3A%20Credit%20card%20Fraud%20detection.ipynb",
      description: "ML model for detecting fraudulent credit card transactions using anomaly detection and classification algorithms.",
      button: "Code",
    },
    {
      id: 26,
      name: "Spam SMS Detection",
      src: SMS,
      URL: "https://github.com/sahej-hira/codsoft_task/blob/main/task-4%3A%20spam%20SMS%20detection.ipynb",
      description: "Natural language processing model to classify SMS messages as spam or legitimate using text classification techniques.",
      button: "Code",
    },
    {
      id: 3,
      name: "QuestionBox.ai",
      src: QuestionBox,
      URL: "https://github.com/sahej-hira/QuestionBox.ai",
      description: "A web app that uses AI to give personalized question papers to practice from.",
      button: "Code",
    },
    {
      id: 3,
      name: "Image classifier for Flowers",
      src: ImageClassifier,
      URL: "https://github.com/sahej-hira/Image_classifier/blob/main/Project_Image_Classifier_Project.ipynb",
      description: "An image classifier for flowers using oxford 102 flower dataset with transfer learning and data augmentation techniques.",
    },
    {
      id: 4,
      name: "CNN Image Classification",
      src: DeepLearningPlaceholder,
      URL: "https://github.com/sahej-hira/Deep_learning_with_pytorch/blob/main/Building%20a%20CNN%20for%20an%20Image%20Classification%20Problem.ipynb",
      description: "Comprehensive implementation of Convolutional Neural Networks for image classification problems using PyTorch.",
      button: "Code",
    },
    {
      id: 5,
      name: "Deep Neural Network Builder",
      src: DeepLearningPlaceholder,
      URL: "https://github.com/sahej-hira/Deep_learning_with_pytorch/blob/main/Building%20a%20Deep%20Neural%20Network%20Using%20PyTorch.ipynb",
      description: "Building and training deep neural networks from scratch using PyTorch with various architectures and optimization techniques.",
      button: "Code",
    },
    {
      id: 6,
      name: "Data Augmentation Toolkit",
      src: DeepLearningPlaceholder,
      URL: "https://github.com/sahej-hira/Deep_learning_with_pytorch/blob/main/Implementing%20Data%20Augmentation.ipynb",
      description: "Advanced data augmentation techniques and preprocessing pipelines to improve model performance and generalization.",
      button: "Code",
    },
    {
      id: 7,
      name: "Regression Analysis with Deep Learning",
      src: DeepLearningPlaceholder,
      URL: "https://github.com/sahej-hira/Deep_learning_with_pytorch/blob/main/developing%20a%20deep%20learning%20solution%20for%20a%20regression%20problem.ipynb",
      description: "Deep learning solutions for regression problems with comprehensive data preparation and model optimization.",
      button: "Code",
    },
    {
      id: 8,
      name: "Neural Network Performance Optimizer",
      src: DeepLearningPlaceholder,
      URL: "https://github.com/sahej-hira/Deep_learning_with_pytorch/blob/main/Improving%20a%20Model's%20Performance.ipynb",
      description: "Implementation of batch normalization, error analysis, and performance improvement techniques for neural networks.",
      button: "Code",
    },
    {
      id: 9,
      name: "PyTorch Tensor Operations",
      src: DeepLearningPlaceholder,
      URL: "https://github.com/sahej-hira/Deep_learning_with_pytorch/blob/main/Creating%20Tensors%20of%20Different%20Ranks%20Using%20PyTorch.ipynb",
      description: "Comprehensive guide to creating and manipulating tensors of different ranks using PyTorch for deep learning applications.",
      button: "Code",
    },
    {
      id: 10,
      name: "Artificial Neural Network",
      src: DeepLearningPlaceholder,
      URL: "https://github.com/sahej-hira/Deep_learning_with_pytorch/blob/main/Building%20an%20ANN.ipynb",
      description: "Implementation of Artificial Neural Networks with PyTorch for classification and prediction tasks.",
      button: "Code",
    },
    {
      id: 11,
      name: "Convolutional Neural Network",
      src: DeepLearningPlaceholder,
      URL: "https://github.com/sahej-hira/Deep_learning_with_pytorch/blob/main/CNN.ipynb",
      description: "Deep dive into CNN architectures with practical implementation and optimization techniques.",
      button: "Code",
    },
    {
      id: 12,
      name: "Data Preparation Pipeline",
      src: DeepLearningPlaceholder,
      URL: "https://github.com/sahej-hira/Deep_learning_with_pytorch/blob/main/Data%20preparation.ipynb",
      description: "Essential data preprocessing and preparation techniques for machine learning and deep learning projects.",
      button: "Code",
    },
    {
      id: 13,
      name: "Messy Data Handling",
      src: DeepLearningPlaceholder,
      URL: "https://github.com/sahej-hira/Deep_learning_with_pytorch/blob/main/Dealing%20with%20Messy%20Data.ipynb",
      description: "Advanced techniques for cleaning, processing, and handling messy real-world datasets.",
      button: "Code",
    },
    {
      id: 14,
      name: "Batch Normalization Implementation",
      src: DeepLearningPlaceholder,
      URL: "https://github.com/sahej-hira/Deep_learning_with_pytorch/blob/main/Implementing%20Batch%20normalization.ipynb",
      description: "Implementation and analysis of batch normalization techniques to improve neural network training.",
      button: "Code",
    },
    {
      id: 15,
      name: "Model Deployment & Usage",
      src: DeepLearningPlaceholder,
      URL: "https://github.com/sahej-hira/Deep_learning_with_pytorch/blob/main/Making%20use%20of%20your%20model.ipynb",
      description: "Best practices for deploying and utilizing trained machine learning models in production environments.",
      button: "Code",
    },
    {
      id: 16,
      name: "Error Analysis Framework",
      src: DeepLearningPlaceholder,
      URL: "https://github.com/sahej-hira/Deep_learning_with_pytorch/blob/main/Performing%20error%20analysis.ipynb",
      description: "Systematic approach to analyzing model errors and improving performance through detailed error analysis.",
      button: "Code",
    },
    {
      id: 17,
      name: "Advanced Data Preparation",
      src: DeepLearningPlaceholder,
      URL: "https://github.com/sahej-hira/Deep_learning_with_pytorch/blob/main/Performing_Data_Preparation.ipynb",
      description: "Advanced data preparation techniques including feature engineering and data transformation methods.",
      button: "Code",
    },
    {
      id: 18,
      name: "Data Rescaling Techniques",
      src: DeepLearningPlaceholder,
      URL: "https://github.com/sahej-hira/Deep_learning_with_pytorch/blob/main/Rescaling%20Data.ipynb",
      description: "Implementation of various data rescaling and normalization techniques for optimal model performance.",
      button: "Code",
    },
    {
      id: 19,
      name: "Dataset Splitting Strategies",
      src: DeepLearningPlaceholder,
      URL: "https://github.com/sahej-hira/Deep_learning_with_pytorch/blob/main/Splitting%20a%20dataset.ipynb",
      description: "Best practices for splitting datasets into training, validation, and test sets for machine learning projects.",
      button: "Code",
    },
    {
      id: 20,
      name: "Advanced Dataset Splitting",
      src: DeepLearningPlaceholder,
      URL: "https://github.com/sahej-hira/Deep_learning_with_pytorch/blob/main/Splitting_a_dataset.ipynb",
      description: "Advanced dataset splitting techniques including stratified sampling and cross-validation strategies.",
      button: "Code",
    },
    {
      id: 21,
      name: "Single Layer Neural Network",
      src: DeepLearningPlaceholder,
      URL: "https://github.com/sahej-hira/Deep_learning_with_pytorch/blob/main/creating%20a%20single%20layer%20neural%20network%20.ipynb",
      description: "Fundamental implementation of single layer neural networks and perceptrons using PyTorch.",
      button: "Code",
    },
    {
      id: 22,
      name: "VFierce",
      src: VFierce,
      URL:"https://github.com/shark-lamp/vfierce",
      description: "A web app that helps new women enterpreneurs with the knowledge of governmnet schemes and resources to their rescue.",
      button: "Code",
    },
    {
      id: 23,
      name: "Random Quote Generator",
      src: RandomQuoteGenerator,
      URL:"https://github.com/shark-lamp/QuestionBox.ai",
      description: "A web app that generates random quotes.",
      button: "Code",
    },
  ];

  const handleProjectClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      id="portfolio"
      className="w-full text-[var(--muted)] py-40"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4" style={{color: 'var(--primary)'}}>
            Projects
          </h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{backgroundColor: 'var(--accent)'}}></div>
          <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
            Here are some of the projects I've worked on recently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolios.map(({ id, name, src, URL, description, button }) => (
            <div 
              key={id} 
              className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-700 hover:border-[var(--accent)]"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                {src === DeepLearningPlaceholder ? (
                  <div 
                    className="w-full h-48 flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                    style={{ background: generateGradient(name) }}
                  >
                    <div className="text-center text-white">
                      <div className="text-4xl mb-2">🧠</div>
                      <div className="text-sm font-semibold px-4">PyTorch Project</div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={src}
                    alt={name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Content Container */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[var(--accent)] transition-colors duration-300">
                  {name}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-6 min-h-[60px]">
                  {description}
                </p>
                
                {/* Button */}
                <button
                  onClick={() => handleProjectClick(URL)}
                  className="w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800"
                  style={{
                    backgroundColor: 'var(--accent)',
                    boxShadow: '0 4px 15px rgba(var(--accent-rgb), 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'var(--primary)';
                    e.target.style.boxShadow = '0 6px 20px rgba(var(--accent-rgb), 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'var(--accent)';
                    e.target.style.boxShadow = '0 4px 15px rgba(var(--accent-rgb), 0.3)';
                  }}
                >
                  {button} →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-[var(--muted)] mb-4">
            Interested in working together?
          </p>
          <a 
            href="#contact" 
            className="inline-block py-3 px-8 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{backgroundColor: 'var(--accent)'}}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
