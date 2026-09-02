// src/components/DigitalTwin/TwinVisualization.jsx
import { motion } from 'framer-motion';
import {
    Brain,
    Briefcase,
    Code,
    Cpu, Database,
    GitBranch,
    Globe,
    Layers,
    Layout,
    PenTool,
    Smartphone,
    Sparkles,
    Workflow,
    Zap
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { digitalTwinNodes } from '../../data/digitalTwinData';

const iconMap = {
  Brain: Brain,
  Code: Code,
  Layout: Layout,
  Smartphone: Smartphone,
  Cpu: Cpu,
  Database: Database,
  PenTool: PenTool,
  Workflow: Workflow,
  Briefcase: Briefcase,
  Sparkles: Sparkles,
  GitBranch: GitBranch,
  Layers: Layers,
  Zap: Zap,
  Globe: Globe
};

const TwinVisualization = ({ selectedNode, onSelectNode }) => {
  const { t } = useTranslation();
  const [hoveredNode, setHoveredNode] = useState(null);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const getNodePosition = (node) => {
    const w = dimensions.width || 800;
    const h = dimensions.height || 500;
    return {
      x: (node.x / 100) * w,
      y: (node.y / 100) * h
    };
  };

  const isSelected = (nodeId) => selectedNode === nodeId;
  const isHovered = (nodeId) => hoveredNode === nodeId;
  const isConnected = (nodeId) => {
    if (!selectedNode) return false;
    const node = digitalTwinNodes.find(n => n.id === selectedNode);
    return node?.connections?.includes(nodeId) || false;
  };

  // Get translated node name
  const getNodeName = (node) => {
    const key = `digitalTwin.twin.nodes.${node.id}`;
    const names = {
      mind: t('digitalTwin.twin.nodes.mind', 'Mind'),
      development: t('digitalTwin.twin.nodes.development', 'Development'),
      design: t('digitalTwin.twin.nodes.design', 'Design'),
      frontend: t('digitalTwin.twin.nodes.frontend', 'Frontend'),
      backend: t('digitalTwin.twin.nodes.backend', 'Backend'),
      mobile: t('digitalTwin.twin.nodes.mobile', 'Mobile'),
      ai: t('digitalTwin.twin.nodes.ai', 'AI & Data'),
      technologies: t('digitalTwin.twin.nodes.technologies', 'Technologies'),
      projects: t('digitalTwin.twin.nodes.projects', 'Projects'),
      systemDesign: t('digitalTwin.twin.nodes.systemDesign', 'System Design')
    };
    return names[node.id] || node.name;
  };

  return (
    <div className="relative w-full h-[500px] md:h-[550px] lg:h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50/50 to-white/50 dark:from-slate-900/50 dark:to-slate-800/50 border border-slate-200 dark:border-slate-700">
      {/* Background grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(20, 184, 166, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(20, 184, 166, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Title */}
      <div className="absolute top-4 left-6 z-10">
        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
          {t('digitalTwin.twin.title', 'Interactive Twin')}
        </p>
        <p className="text-sm text-slate-400 dark:text-slate-500">
          {t('digitalTwin.twin.subtitle', 'Click a node to explore')}
        </p>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 left-6 z-10 flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1.5 text-[10px] text-slate-400 dark:text-slate-500">
          <span className="w-2 h-2 rounded-full bg-teal-500" />
          {t('digitalTwin.twin.legend.selected', 'Selected')}
        </span>
        <span className="inline-flex items-center gap-1.5 text-[10px] text-slate-400 dark:text-slate-500">
          <span className="w-2 h-2 rounded-full bg-teal-500/30" />
          {t('digitalTwin.twin.legend.connected', 'Connected')}
        </span>
      </div>

      {/* Connection Lines */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      >
        {digitalTwinNodes.map((node) => {
          const pos = getNodePosition(node);
          return node.connections?.map((targetId) => {
            const target = digitalTwinNodes.find(n => n.id === targetId);
            if (!target) return null;
            const targetPos = getNodePosition(target);
            
            const isActive = isSelected(node.id) || isSelected(targetId);
            const isConnectedToSelected = isConnected(node.id) || isConnected(targetId);
            
            return (
              <line
                key={`${node.id}-${targetId}`}
                x1={pos.x}
                y1={pos.y}
                x2={targetPos.x}
                y2={targetPos.y}
                stroke={isActive || isConnectedToSelected ? '#14b8a6' : '#1e293b'}
                strokeOpacity={isActive || isConnectedToSelected ? 0.6 : 0.1}
                strokeWidth={isActive || isConnectedToSelected ? 2 : 1}
                className="transition-all duration-500"
              />
            );
          });
        })}
      </svg>

      {/* Nodes */}
      <div className="relative w-full h-full z-10" ref={containerRef}>
        {digitalTwinNodes.map((node) => {
          const pos = getNodePosition(node);
          const Icon = iconMap[node.icon] || Code;
          const selected = isSelected(node.id);
          const connected = isConnected(node.id);
          const hovered = isHovered(node.id);
          const nodeName = getNodeName(node);

          return (
            <motion.button
              key={node.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 group"
              style={{
                left: pos.x,
                top: pos.y,
                zIndex: selected ? 20 : 10
              }}
              onClick={() => onSelectNode(selected ? null : node.id)}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                transition: { delay: (node.x + node.y) / 200, duration: 0.5 }
              }}
            >
              {/* Glow ring */}
              {(selected || hovered) && (
                <div 
                  className={`absolute inset-0 rounded-full blur-xl transition-all duration-500 ${
                    selected ? 'opacity-100 bg-teal-500/40' : 'opacity-60 bg-teal-500/20'
                  }`}
                  style={{
                    width: '100%',
                    height: '100%',
                    transform: 'scale(1.8)'
                  }}
                />
              )}

              {/* Connection indicator ring */}
              {connected && !selected && (
                <div 
                  className="absolute inset-0 rounded-full border-2 border-teal-500/30 animate-pulse"
                  style={{
                    width: '100%',
                    height: '100%',
                    transform: 'scale(1.4)'
                  }}
                />
              )}

              {/* Node circle */}
              <div 
                className={`relative rounded-full transition-all duration-300 flex items-center justify-center ${
                  selected 
                    ? 'w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-teal-500 to-emerald-500 shadow-2xl shadow-teal-500/50' 
                    : hovered 
                      ? 'w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 border-2 border-teal-500/50' 
                      : connected
                        ? 'w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 border-2 border-teal-500/30'
                        : 'w-12 h-12 md:w-14 md:h-14 bg-white/80 dark:bg-slate-800/80 border-2 border-slate-200 dark:border-slate-700'
                }`}
              >
                <Icon className={`w-5 h-5 md:w-6 md:h-6 transition-all duration-300 ${
                  selected 
                    ? 'text-white' 
                    : hovered 
                      ? 'text-teal-500' 
                      : 'text-slate-600 dark:text-slate-400'
                }`} />
                
                {/* Selected indicator */}
                {selected && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-white border-2 border-teal-500 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                  </div>
                )}
              </div>

              {/* Node label */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap">
                <p className={`text-xs font-medium transition-all duration-300 ${
                  selected 
                    ? 'text-teal-600 dark:text-teal-400' 
                    : hovered 
                      ? 'text-slate-700 dark:text-slate-300' 
                      : 'text-slate-500 dark:text-slate-400'
                }`}>
                  {nodeName}
                </p>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Empty state hint */}
      {!selectedNode && (
        <div className="absolute bottom-4 right-6 z-10 text-right">
          <p className="text-xs text-slate-400 dark:text-slate-500">
            {t('digitalTwin.twin.emptyState', 'Select a node to explore')}
          </p>
          <p className="text-[10px] text-slate-400/60 dark:text-slate-500/60">
            {digitalTwinNodes.length} {t('digitalTwin.twin.nodesConnected', 'nodes connected')}
          </p>
        </div>
      )}
    </div>
  );
};

export default TwinVisualization;