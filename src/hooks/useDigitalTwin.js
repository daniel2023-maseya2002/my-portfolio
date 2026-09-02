// src/hooks/useDigitalTwin.js
import { useCallback, useMemo, useState } from 'react';
import {
    designDNA,
    digitalTwinCapabilities,
    digitalTwinExperience,
    digitalTwinKnowledge,
    digitalTwinModes,
    digitalTwinNodes,
    engineeringDNA,
    whatICanBuild
} from '../data/digitalTwinData';
import projects from '../data/projects'; // Fixed: import default export
import { skillsData } from '../data/skills'; // Fixed: import skillsData
import { trackEvent } from '../utils/analytics';

export const useDigitalTwin = () => {
  const [selectedNode, setSelectedNode] = useState(null);
  const [selectedMode, setSelectedMode] = useState('explore');
  const [activeSection, setActiveSection] = useState('twin');
  const [selectedTechnology, setSelectedTechnology] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  // Get the current mode configuration
  const currentMode = useMemo(() => {
    return digitalTwinModes.find(m => m.id === selectedMode) || digitalTwinModes[4];
  }, [selectedMode]);

  // Get contextual content based on selected node and mode
  const getContextualContent = useCallback((nodeId) => {
    if (!nodeId) return null;

    const node = digitalTwinNodes.find(n => n.id === nodeId);
    if (!node) return null;

    // Find related capabilities
    const relatedCapabilities = digitalTwinCapabilities.filter(cap =>
      cap.technologies?.some(tech => 
        node.connections?.includes(cap.id) || 
        cap.id === nodeId ||
        cap.projects?.some(p => p.toLowerCase().includes(node.name.toLowerCase()))
      )
    );

    // Find related projects - using the imported projects array
    const relatedProjects = projects.filter(project =>
      project.skills?.some(skill => 
        node.connections?.includes(skill) ||
        project.category?.toLowerCase().includes(node.name.toLowerCase())
      )
    );

    // Find related technologies
    const relatedTechnologies = skillsData.filter(skill =>
      node.connections?.includes(skill.id) ||
      skill.category?.toLowerCase().includes(node.name.toLowerCase())
    );

    // Mode-specific content prioritization
    const priority = currentMode.priority || [];
    let content = {
      node,
      capabilities: relatedCapabilities,
      projects: relatedProjects,
      technologies: relatedTechnologies
    };

    return content;
  }, [currentMode]);

  // Get recommendations based on mode
  const getModeRecommendations = useCallback(() => {
    const priority = currentMode.priority || [];
    
    const recommendations = {
      recruiter: {
        title: "Key Highlights for Recruiters",
        items: [
          "Full-Stack Development expertise",
          "15+ completed projects",
          "Strong engineering practices",
          "AI & intelligent systems experience"
        ]
      },
      client: {
        title: "What I Can Build For You",
        items: [
          "Web applications",
          "Mobile applications",
          "Intelligent systems",
          "Business automation"
        ]
      },
      developer: {
        title: "Technical Stack",
        items: [
          "React, JavaScript, Tailwind CSS",
          "Django, Python, PostgreSQL",
          "Flutter, Dart, Firebase",
          "AI integration, REST APIs"
        ]
      },
      designer: {
        title: "Design Capabilities",
        items: [
          "UI/UX Design",
          "Figma prototyping",
          "Design systems",
          "User-centered design"
        ]
      },
      explore: {
        title: "Explore Freely",
        items: [
          "Click any node to explore",
          "Discover connections",
          "Explore projects and technologies",
          "Learn about engineering approach"
        ]
      }
    };

    return recommendations[selectedMode] || recommendations.explore;
  }, [selectedMode]);

  // Handle node selection with analytics
  const handleNodeSelect = useCallback((nodeId) => {
    setSelectedNode(nodeId);
    try {
      trackEvent('twin-node-selected', { node: nodeId });
    } catch (e) {
      // Silently handle analytics errors
    }
  }, []);

  // Handle mode selection with analytics
  const handleModeSelect = useCallback((modeId) => {
    setSelectedMode(modeId);
    setSelectedNode(null);
    try {
      trackEvent('mode-selected', { mode: modeId });
    } catch (e) {
      // Silently handle analytics errors
    }
  }, []);

  return {
    // State
    selectedNode,
    selectedMode,
    activeSection,
    selectedTechnology,
    selectedProject,
    currentMode,
    
    // Data
    nodes: digitalTwinNodes,
    capabilities: digitalTwinCapabilities,
    modes: digitalTwinModes,
    knowledge: digitalTwinKnowledge,
    whatICanBuild,
    engineeringDNA,
    designDNA,
    experience: digitalTwinExperience,
    
    // Actions
    setSelectedNode: handleNodeSelect,
    setSelectedMode: handleModeSelect,
    setActiveSection,
    setSelectedTechnology,
    setSelectedProject,
    
    // Utilities
    getContextualContent,
    getModeRecommendations
  };
};