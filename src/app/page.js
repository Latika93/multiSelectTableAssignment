"use client"
import { useEffect, useState } from "react";

const data = [
  {
    id: "1",
    name: "One one",
    email: "one@one.com",
    phone: "21211212211",
    date: "Feb 26, 2022",
  },
  {
    id: "2",
    name: "Two two",
    email: "two@two.com",
    phone: "12323324",
    date: "Feb 26, 2022",
  },
  {
    id: "3",
    name: "Three three",
    email: "three@three.com",
    phone: "234324234234234",
    date: "Feb 26, 2022",
  },
];

export default function Home() {

  const [selectedRows, setSelectedRows] = useState([]);

  const handleSelectAll = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelectedRows(data);
    } else {
      setSelectedRows([]);
    }
  };

  const handleRowsSelect = (event) => {
    const { id, checked } = event.target;
    const row = data.find(row => row.id === id);
    if (checked) {
      setSelectedRows(prev => [...prev, row]);
    } else {
      setSelectedRows(prev => prev.filter(row => row.id !== id));
    }
  };

  useEffect(() => {
    console.log(selectedRows);
  }, [selectedRows]);

  return (
    <div className="m-10">
      <h2 className="text-2xl font-semibold text-black-600 text-center mb-3">Multiselect Table</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-300">
            <tr >
              <th className="px-1">
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                />
              </th>

              <th className="py-2">
                Name
              </th>
              <th className="py-2">
                Email
              </th>
              <th className="py-2">
                Phone
              </th>
              <th className="py-2">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="">
                <td className="py-2 px-1">
                  <input
                    type="checkbox"
                    id={row.id}
                    checked={selectedRows.some(selectedRow => selectedRow.id === row.id)}
                    onChange={handleRowsSelect}
                  />
                </td>
                <th className="py-2">
                  {row.name}
                </th>
                <td className="py-2">
                  {row.email}
                </td>
                <td className="py-2">
                  {row.phone}
                </td>
                <td className="py-2">
                  {row.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
