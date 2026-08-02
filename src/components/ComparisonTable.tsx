export function ComparisonTable() {
  const rows = [
    [
      "Understand healthcare operations",
      "Sometimes",
      "Rarely",
      "Rarely",
      "Yes",
    ],
    ["Build practice-specific AI systems", "No", "Sometimes", "No", "Yes"],
    ["Address culture and leadership", "Sometimes", "No", "No", "Yes"],
    [
      "Redesign workflows and patient experience",
      "Sometimes",
      "Rarely",
      "No",
      "Yes",
    ],
    [
      "Create governance and safe AI adoption",
      "Rarely",
      "Sometimes",
      "No",
      "Yes",
    ],
    [
      "Stay embedded through implementation",
      "Sometimes",
      "Sometimes",
      "Rarely",
      "Yes",
    ],
    [
      "Connect change to business results",
      "Sometimes",
      "Rarely",
      "Rarely",
      "Yes",
    ],
  ];
  return (
    <div className="comparison-wrap">
      <table className="comparison-table">
        <thead>
          <tr>
            <th>What most options do</th>
            <th>Traditional consultants</th>
            <th>Generic AI vendors</th>
            <th>Generalist agencies</th>
            <th>PXC</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, index) => (
<td
  key={cell}
  className={`${index === 4 ? "table-aqua" : ""} ${
    cell === "Yes"
      ? "status-yes"
      : cell === "Sometimes"
      ? "status-sometimes"
      : cell === "Rarely"
      ? "status-rarely"
      : cell === "No"
      ? "status-no"
      : ""
  }`}
>
  {cell}
</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
