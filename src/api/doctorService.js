// export const fetchDoctors = async ({ name, specialization, hospital, date }) => {
//   const query = new URLSearchParams();
//   if (name) query.append("name", name);
//   if (specialization) query.append("specialization", specialization);
//   if (hospital) query.append("hospital", hospital);
//   if (date) query.append("date", date);

//   try {
//     const res = await fetch(`http://localhost:3000/api/doctors/search?${query.toString()}`);
//     const data = await res.json();

//     if (res.ok) {
//       return data.doctors;
//     } else {
//       console.error(data.message);
//       return [];
//     }
//   } catch (err) {
//     console.error("Fetch error:", err);
//     return [];
//   }
// };
