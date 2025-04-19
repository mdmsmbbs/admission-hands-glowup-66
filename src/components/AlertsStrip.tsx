
import React from 'react';

const alerts = [
  "NEET Result Announcement",
  "College Admission Deadlines",
  "Scholarship Opportunities",
  "New Admission Guidelines",
  "Important Documents Checklist"
];

const AlertsStrip = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-primary text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3">Latest Alerts & Updates</h2>
      <div className="flex gap-3 p-3 overflow-x-auto">
        {alerts.map((alert, index) => (
          <div key={index} className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-gray-light px-4">
            <p className="text-primary text-sm font-medium whitespace-nowrap">{alert}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertsStrip;
