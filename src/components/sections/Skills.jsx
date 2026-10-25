// src/components/sections/Skills.jsx
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();

  // Each group references `skills.groups.<key>` in the locale files.
  // Items are drawn from `skills.skillsList.*` (already translated),
  // or from `skills.groups.<key>.items.*` for new capability-specific items.
  const GROUPS = [
    {
      key: 'softwareEngineering',
      items: [
        'python',
        'django',
        'react',
        'postgresql',
        'restapis',
        'javascript',
      ],
    },
    {
      key: 'aiData',
      items: [
        'aiintegration',
        'generativeai',
        'promptengineering',
        'openai',
        'nlp',
        'aiworkflow',
      ],
    },
    {
      key: 'productUx',
      items: [
        'uidesign',
        'figma',
        'wireframing',
        'prototyping',
        'designsystems',
        'userflow',
      ],
    },
    {
      key: 'innovation',
      items: [
        'problemIdentification',
        'solutionDesign',
        'productThinking',
        'businessModels',
        'pitching',
        'rapidPrototyping',
      ],
    },
    {
      key: 'digitalSolutions',
      items: [
        'fullstack',
        'webApps',
        'bookingSystems',
        'dashboards',
        'apiIntegration',
        'cloudDeployment',
      ],
    },
    {
      key: 'digitalOps',
      items: [
        'workflowAutomation',
        'techdocs',
        'remotecollab',
        'projectmanagement',
        'datamanagement',
        'virtualAssistance',
      ],
    },
  ];

  // Resolve a single item label:
  // 1. Try `skills.groups.<group>.items.<item>` (new keys, used for Innovation & Digital Ops)
  // 2. Fall back to `skills.skillsList.<item>` (existing keys, used by other groups)
  // 3. Fall back to the raw key as last resort.
  const itemLabel = (groupKey, item) =>
    t(`skills.groups.${groupKey}.items.${item}`, {
      defaultValue: t(`skills.skillsList.${item}`, item),
    });

  return (
    <section id="skills" className="relative w-full overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-24 py-20 md:py-28">

        {/* Section label */}
        <div className="mb-10 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: 'var(--ink-muted)' }}>
            {t('skills.label', 'Stack')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">

          {/* Left Column: Heading */}
          <div className="md:col-span-4">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4"
              style={{ color: 'var(--ink)', fontFamily: 'var(--font-serif)' }}
            >
              {t('skills.heading', 'Tools I use to build.')}
            </h2>
            <p className="text-base" style={{ color: 'var(--ink-secondary)' }}>
              {t(
                'skills.subheading',
                'A focused set of technologies no badge walls, just the stack I actually reach for.'
              )}
            </p>
          </div>

          {/* Right Column: Capability Groups */}
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {GROUPS.map((g) => (
                <div
                  key={g.key}
                  className="relative p-6 rounded-xl"
                  style={{
                    backgroundColor: 'var(--surface)',
                    border: '1px solid var(--border)',
                  }}
                >
                  {/* Group Label */}
                  <div className="mb-4">
                    <h3
                      className="text-xs font-bold uppercase tracking-[0.14em] mb-1"
                      style={{ color: 'var(--ink)' }}
                    >
                      {t(`skills.groups.${g.key}.label`, g.key)}
                    </h3>
                    <p className="text-xs" style={{ color: 'var(--ink-muted)' }}>
                      {t(`skills.groups.${g.key}.subtitle`, '')}
                    </p>
                  </div>

                  {/* Items */}
                  <ul className="space-y-2.5 list-none">
                    {g.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm md:text-base"
                        style={{ color: 'var(--ink-secondary)' }}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ color: 'var(--accent)', flexShrink: 0 }}
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {itemLabel(g.key, item)}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;