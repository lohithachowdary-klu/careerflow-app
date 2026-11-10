export const seedJobs = [
 {id:1,company:'Google',role:'Frontend Developer',location:'Bengaluru',type:'Full-time',status:'Interview',date:'2026-11-04',link:'https://careers.google.com',salary:'₹12–18 LPA',notes:'Prepare React, JavaScript and problem solving.'},
 {id:2,company:'Microsoft',role:'Software Engineer Intern',location:'Hyderabad',type:'Internship',status:'Applied',date:'2026-11-02',link:'https://careers.microsoft.com',salary:'₹50,000/month',notes:'Review data structures and algorithms.'},
 {id:3,company:'Infosys',role:'Systems Engineer',location:'Pune',type:'Full-time',status:'Under Review',date:'2026-10-28',link:'https://careers.infosys.com',salary:'₹4–6 LPA',notes:''},
 {id:4,company:'Amazon',role:'SDE Intern',location:'Remote',type:'Internship',status:'Saved',date:'2026-11-07',link:'https://amazon.jobs',salary:'',notes:'Check application deadline.'},
 {id:5,company:'TCS',role:'Assistant System Engineer',location:'Chennai',type:'Full-time',status:'Rejected',date:'2026-10-18',link:'',salary:'',notes:''}
]
export const statuses = ['Saved','Applied','Under Review','Interview','Offer','Rejected']
export const read = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback } catch { return fallback } }
export const write = (key, value) => localStorage.setItem(key, JSON.stringify(value))