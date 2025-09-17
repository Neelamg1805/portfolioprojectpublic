import { useState } from 'react'
import TemplateCard from '../components/TemplateCard.tsx'
import { templates } from '../lib/templates.ts'

export default function TemplatesPage() {
  const [selectedTemplate, setSelectedTemplate] = useState("modern")

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Choose a Template</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <TemplateCard
            key={template.id}
            template={template}
            isSelected={selectedTemplate === template.id}
            onSelect={() => setSelectedTemplate(template.id)}
          />
        ))}
      </div>
    </div>
  )
}
