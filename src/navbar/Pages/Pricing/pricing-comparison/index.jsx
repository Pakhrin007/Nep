export default function PricingComparison() {
    return (
        
      <div className="w-full max-w-6xl mx-auto overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-4 px-6 text-left font-medium font-heading text-gray-700 text-[20px]">Feature</th>
              <th className="py-4 px-6 text-left font-medium font-heading text-gray-700 text-[20px]">Free Trial</th>
              <th className="py-4 px-6 text-left font-medium font-heading text-gray-700 text-[20px]">Standard</th>
              <th className="py-4 px-6 text-left font-medium font-heading text-gray-700 text-[20px]">Pro</th>
            </tr>
          </thead>
          <tbody className="text-[16px] font-body" >
            <tr className="border-b border-gray-200 bg-gray-100">
              <td className="py-4 px-6 text-left font-medium text-gray-800">Feature Pricing</td>
              <td className="py-4 px-6 text-left text-gray-800">All included</td>
              <td className="py-4 px-6 text-left text-gray-800">Modular</td>
              <td className="py-4 px-6 text-left text-gray-800">All-inclusive</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-4 px-6 text-left font-medium text-gray-800">HR Suite</td>
              <td className="py-4 px-6 text-left text-green-600">✓</td>
              <td className="py-4 px-6 text-left text-amber-600">$5/user</td>
              <td className="py-4 px-6 text-left text-green-600">✓</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-100">
              <td className="py-4 px-6 text-left font-medium text-gray-800">Team Chat</td>
              <td className="py-4 px-6 text-left text-green-600">✓</td>
              <td className="py-4 px-6 text-left text-amber-600">$5/user</td>
              <td className="py-4 px-6 text-left text-green-600">✓</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-4 px-6 text-left font-medium text-gray-800">Project Management</td>
              <td className="py-4 px-6 text-left text-green-600">✓</td>
              <td className="py-4 px-6 text-left text-amber-600">$5/user</td>
              <td className="py-4 px-6 text-left text-green-600">✓</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-100">
              <td className="py-4 px-6 text-left font-medium text-gray-800">Calendar</td>
              <td className="py-4 px-6 text-left text-green-600">✓</td>
              <td className="py-4 px-6 text-left text-green-600">✓</td>
              <td className="py-4 px-6 text-left text-green-600">✓</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-4 px-6 text-left font-medium text-gray-800">
                Storage <span className="inline-block ml-1 text-gray-400">ⓘ</span>
              </td>
              <td className="py-4 px-6 text-left text-gray-800">3GB</td>
              <td className="py-4 px-6 text-left text-gray-800">
                30GB
                <div className="text-xs text-gray-500">($0.30/GB extra)</div>
              </td>
              <td className="py-4 px-6 text-left text-gray-800">
                30GB
                <div className="text-xs text-gray-500">($0.20/GB extra)</div>
              </td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-100">
              <td className="py-4 px-6 text-left font-medium text-gray-800">AI Chat</td>
              <td className="py-4 px-6 text-left text-gray-800">20 credits</td>
              <td className="py-4 px-6 text-left text-gray-800">$9.99 for 500 credits</td>
              <td className="py-4 px-6 text-left text-green-600">✓</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-4 px-6 text-left font-medium text-gray-800">Basic AI Agent</td>
              <td className="py-4 px-6 text-left text-green-600">✓</td>
              <td className="py-4 px-6 text-left text-green-600">✓</td>
              <td className="py-4 px-6 text-left text-green-600">✓</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-100">
              <td className="py-4 px-6 text-left font-medium text-gray-800">Advanced Admin Controls</td>
              <td className="py-4 px-6 text-left text-gray-400">✗</td>
              <td className="py-4 px-6 text-left text-gray-800">Basic</td>
              <td className="py-4 px-6 text-left text-gray-800">Advanced</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-4 px-6 text-left font-medium text-gray-800">Priority Support</td>
              <td className="py-4 px-6 text-left text-gray-400">✗</td>
              <td className="py-4 px-6 text-left text-gray-400">✗</td>
              <td className="py-4 px-6 text-left text-green-600">✓</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-100">
              <td className="py-4 px-6 text-left font-medium text-gray-800">Early AI Access</td>
              <td className="py-4 px-6 text-left text-gray-400">✗</td>
              <td className="py-4 px-6 text-left text-gray-400">✗</td>
              <td className="py-4 px-6 text-left text-green-600">✓</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
  