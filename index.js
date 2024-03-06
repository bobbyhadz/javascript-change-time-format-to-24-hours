// EXAMPLE 1 - Change Time format to 24 Hours in JavaScript

const date = new Date();

// 👇️ 7/25/2023, 16:30:52
console.log(
  date.toLocaleString('en-US', {
    hour12: false,
  }),
);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Setting different properties and values on the `options` object

// const date = new Date();

// // 👇️ Tuesday, July 25, 2023 at 16:32:39
// console.log(
//   date.toLocaleString('en-US', {
//     dateStyle: 'full',
//     timeStyle: 'full',
//     hour12: false,
//   }),
// );

// ------------------------------------------------------------------

// // EXAMPLE 3 - Change getHours() to 12 Hour Format

// function formatHoursTo12(date) {
//   return date.getHours() % 12 || 12;
// }

// const date1 = new Date('September 24, 2025 15:24:00');
// console.log(formatHoursTo12(date1)); // 👉️ 3

// const date2 = new Date('September 24, 2025 23:05:00');
// console.log(formatHoursTo12(date2)); // 👉️ 11

// const date3 = new Date('September 24, 2025 12:13:00');
// console.log(formatHoursTo12(date3)); // 👉️ 12
