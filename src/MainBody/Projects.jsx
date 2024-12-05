import React from "react";
import ArrowElement from "./ArrowElement";
import GlowingLink from "./GlowingLink";

function Projects() {
  const projects = [
    {
      name: "Youtube video summarizer and library with AI",
      link: "https://github.com/HazemHassine/yt-summary",
      status: "In going",
      description: "Enables you to summarize youtube videos, make an account and save your summaries and alot more to come. A full stack web application written in React.js and tailwind. Backend using Node.js and integration with firebase"
    },
    {
      name: "TaxiService",
      link: "https://github.com/HazemHassine/TaxiService",
      status: "Completed",
      description:
        "A web application for a taxi service using React, Fireship, EmailJs and Google Maps api.",
    },
    {
      name: "Federated Learning Algorithms",
      link: "https://github.com/HazemHassine/FL",
      status: "Completed",
      description:
        "An implementation of some of the federated learning algorithms, FedAvg, FedProx,",
    },
    {
      name: "Spam Email Classification",
      link: "https://github.com/HazemHassine/Spam-Email-Classification-svm",
      status: "Completed",
      description:
        "A machine learning project for spam email classification using Support Vector Machines.",
    },
    {
      name: "Distributed Communication Protocols",
      link: "https://github.com/HazemHassine/systeme_repartie",
      status: "Completed",
      description:
        "A machine learning project for spam email classification using Support Vector Machines.",
    },
    {
      name: "Machine Learning from scratch",
      link: "https://github.com/HazemHassine/neural_network_from_scratch",
      status: "In progress",
      description:
        "Implementation of basic machine learning algorithms in Python with just numpy",
    },
    {
      name: "Diabetes Prediction API using KNN",
      link: "https://github.com/HazemHassine/Diabetes_prediction_api",
      status: "Completed, discontinued deployment due to Heroku cutting out",
      description:
        "A diabetes prediction API using user inputs, in Python with FastAPI, Heroki and Uvicorn. Machine Learning model, KNN classifier.",
    },
    {
      name: "Arabic Letter Classification",
      link: "https://github.com/HazemHassine/ArabicLetterClassificationWithCNN",
      status: "Completed",
      description:
        "Classification of arabic letters using a Convolutional Neural Network",
    },
    {
      name: "Sentiment Analysis streamlit application",
      link: "https://github.com/HazemHassine/Sentiment_analysis_streamlit",
      status: "Completed",
      description:
        "A streamlit application that provides the general sentiment of a given input",
    },
    {
      name: "A tweet sarcasm Analysis API",
      link: "https://github.com/HazemHassine/TweetsSarcasmApi",
      status: "Completed",
      description: "An api that provides the sarcasm level of a tweet",
    },
    {
      name: "TSP visualization",
      link: "https://github.com/HazemHassine/travelling_salesman_problem",
      status: "Completed",
      description: "A visualization of the travel salesman problem",
    },
    {
      name: "Image manipulation using STB library (applying filters)",
      link: "https://github.com/HazemHassine/ImageManipulationSTB",
      status: "Completed",
      description:
        "Applying various filters to images using C++ and the STB library",
    },
    ];
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <div key={index} className="bg-gray-800 p-6 rounded-lg">
          <ArrowElement>
            <div className="text-xl mb-2">
              <GlowingLink
                link={project.link}
                text={project.name}
              />
            </div>
            <div>
              <h4 className="text-gray-400 mb-2">Status: {project.status}</h4>
              <p className="text-sm">{project.description}</p>
            </div>
          </ArrowElement>
        </div>
      ))}
    </div>
  );
}

export default Projects;
