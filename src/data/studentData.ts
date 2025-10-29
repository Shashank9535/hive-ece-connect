export interface StudentData {
  id: number;
  name: string;
  usn: string;
  attendance: number;
  assignmentsCompleted: number;
  feeStatus: string;
  upcomingEvent: string;
  cgpa: number;
  sgpa: {
    sem1: number;
    sem2: number;
    sem3: number;
    sem4: number;
    sem5: number;
    sem6: number;
  };
}

export const studentData: StudentData[] = [
  { id: 1, name: "ABDULLAH FURKHAN", usn: "3VY22UE001", attendance: 82, assignmentsCompleted: 4, feeStatus: "Paid", upcomingEvent: "AI Workshop", cgpa: 8.74, sgpa: { sem1: 9.15, sem2: 8.01, sem3: 9.08, sem4: 8.08, sem5: 9.18, sem6: 8.94 } },
  { id: 2, name: "ABHISHEK", usn: "3VY22UE002", attendance: 86, assignmentsCompleted: 3, feeStatus: "Paid", upcomingEvent: "AI Workshop", cgpa: 8.52, sgpa: { sem1: 8.84, sem2: 8.06, sem3: 8.59, sem4: 8.69, sem5: 8.78, sem6: 8.14 } },
  { id: 3, name: "ABHISHEK S B", usn: "3VY22UE003", attendance: 82, assignmentsCompleted: 5, feeStatus: "Partial", upcomingEvent: "Mid-term Exam", cgpa: 8.34, sgpa: { sem1: 8.57, sem2: 9.07, sem3: 8.19, sem4: 8.3, sem5: 8.03, sem6: 7.87 } },
  { id: 4, name: "ADITYA", usn: "3VY22UE004", attendance: 91, assignmentsCompleted: 3, feeStatus: "Pending", upcomingEvent: "Mid-term Exam", cgpa: 8.39, sgpa: { sem1: 7.82, sem2: 8.37, sem3: 9.14, sem4: 8.16, sem5: 7.92, sem6: 8.95 } },
  { id: 5, name: "AISHWARYA", usn: "3VY22UE005", attendance: 89, assignmentsCompleted: 3, feeStatus: "Partial", upcomingEvent: "Project Review", cgpa: 8.51, sgpa: { sem1: 8.35, sem2: 8.7, sem3: 8.27, sem4: 8.4, sem5: 8.92, sem6: 8.43 } },
  { id: 6, name: "AJAYKUMAR", usn: "3VY22UE006", attendance: 88, assignmentsCompleted: 5, feeStatus: "Paid", upcomingEvent: "Mid-term Exam", cgpa: 8.4, sgpa: { sem1: 8.05, sem2: 8.16, sem3: 8.51, sem4: 8.71, sem5: 7.99, sem6: 8.95 } },
  { id: 7, name: "AKHILESH", usn: "3VY22UE007", attendance: 84, assignmentsCompleted: 3, feeStatus: "Paid", upcomingEvent: "Project Review", cgpa: 8.4, sgpa: { sem1: 8.16, sem2: 8.95, sem3: 7.97, sem4: 8.81, sem5: 8.05, sem6: 8.46 } },
  { id: 8, name: "AKSHATA", usn: "3VY22UE008", attendance: 91, assignmentsCompleted: 5, feeStatus: "Paid", upcomingEvent: "AI Workshop", cgpa: 8.51, sgpa: { sem1: 8.56, sem2: 8.65, sem3: 8.88, sem4: 8.01, sem5: 9.1, sem6: 7.85 } },
  { id: 9, name: "ARCHANA", usn: "3VY22UE009", attendance: 90, assignmentsCompleted: 5, feeStatus: "Partial", upcomingEvent: "Mid-term Exam", cgpa: 8.68, sgpa: { sem1: 8.95, sem2: 9.16, sem3: 8.28, sem4: 8.5, sem5: 8.48, sem6: 8.71 } },
  { id: 10, name: "ARUNKUMAR", usn: "3VY22UE010", attendance: 80, assignmentsCompleted: 5, feeStatus: "Pending", upcomingEvent: "AI Workshop", cgpa: 8.6, sgpa: { sem1: 7.94, sem2: 9.13, sem3: 8.42, sem4: 7.99, sem5: 8.92, sem6: 9.18 } },
  { id: 11, name: "ASIYA", usn: "3VY22UE011", attendance: 85, assignmentsCompleted: 5, feeStatus: "Paid", upcomingEvent: "Mid-term Exam", cgpa: 8.74, sgpa: { sem1: 9.02, sem2: 8.64, sem3: 8.05, sem4: 9.11, sem5: 9.18, sem6: 8.44 } },
  { id: 12, name: "BHAGYASHREE", usn: "3VY22UE012", attendance: 94, assignmentsCompleted: 3, feeStatus: "Partial", upcomingEvent: "Mid-term Exam", cgpa: 8.6, sgpa: { sem1: 9.19, sem2: 7.83, sem3: 8.85, sem4: 8.85, sem5: 7.94, sem6: 8.93 } },
  { id: 13, name: "BHUVANESHWARI", usn: "3VY22UE013", attendance: 92, assignmentsCompleted: 3, feeStatus: "Partial", upcomingEvent: "Mid-term Exam", cgpa: 8.53, sgpa: { sem1: 8.53, sem2: 9.14, sem3: 8.31, sem4: 8.76, sem5: 8.38, sem6: 8.04 } },
  { id: 14, name: "DARSHAN", usn: "3VY22UE014", attendance: 93, assignmentsCompleted: 3, feeStatus: "Partial", upcomingEvent: "Hackathon", cgpa: 8.32, sgpa: { sem1: 8.31, sem2: 7.95, sem3: 8.47, sem4: 8.7, sem5: 8.64, sem6: 7.86 } },
  { id: 15, name: "DYANESHWAR", usn: "3VY22UE015", attendance: 82, assignmentsCompleted: 4, feeStatus: "Paid", upcomingEvent: "Project Review", cgpa: 8.53, sgpa: { sem1: 8.81, sem2: 8.76, sem3: 8.34, sem4: 8.5, sem5: 8.89, sem6: 7.86 } },
  { id: 16, name: "GEETA", usn: "3VY22UE017", attendance: 93, assignmentsCompleted: 5, feeStatus: "Partial", upcomingEvent: "Hackathon", cgpa: 8.24, sgpa: { sem1: 8.18, sem2: 7.84, sem3: 8.24, sem4: 7.85, sem5: 8.76, sem6: 8.6 } },
  { id: 17, name: "GURUKIRAN", usn: "3VY22UE018", attendance: 82, assignmentsCompleted: 5, feeStatus: "Partial", upcomingEvent: "Hackathon", cgpa: 8.35, sgpa: { sem1: 8.61, sem2: 8.04, sem3: 8.05, sem4: 8.23, sem5: 8.84, sem6: 8.34 } },
  { id: 18, name: "JAGADISH", usn: "3VY22UE019", attendance: 89, assignmentsCompleted: 5, feeStatus: "Paid", upcomingEvent: "Project Review", cgpa: 8.63, sgpa: { sem1: 9, sem2: 8.98, sem3: 8.61, sem4: 8.62, sem5: 7.83, sem6: 8.77 } },
  { id: 19, name: "KARTIK", usn: "3VY22UE020", attendance: 76, assignmentsCompleted: 5, feeStatus: "Partial", upcomingEvent: "AI Workshop", cgpa: 8.53, sgpa: { sem1: 8.89, sem2: 8.09, sem3: 8.92, sem4: 7.86, sem5: 9.04, sem6: 8.36 } },
  { id: 20, name: "KASTURI A M", usn: "3VY22UE021", attendance: 79, assignmentsCompleted: 3, feeStatus: "Partial", upcomingEvent: "Project Review", cgpa: 8.7, sgpa: { sem1: 8.18, sem2: 7.94, sem3: 8.96, sem4: 9.03, sem5: 8.93, sem6: 9.14 } },
  { id: 21, name: "KAVYA", usn: "3VY22UE022", attendance: 77, assignmentsCompleted: 5, feeStatus: "Pending", upcomingEvent: "AI Workshop", cgpa: 8.48, sgpa: { sem1: 8.97, sem2: 8.72, sem3: 8.02, sem4: 8.2, sem5: 7.91, sem6: 9.09 } },
  { id: 22, name: "KIRAN", usn: "3VY22UE023", attendance: 89, assignmentsCompleted: 3, feeStatus: "Partial", upcomingEvent: "Mid-term Exam", cgpa: 8.47, sgpa: { sem1: 9.15, sem2: 8.49, sem3: 8.55, sem4: 8.47, sem5: 8.18, sem6: 8 } },
  { id: 23, name: "KOUSHIK", usn: "3VY22UE024", attendance: 88, assignmentsCompleted: 3, feeStatus: "Partial", upcomingEvent: "AI Workshop", cgpa: 8.46, sgpa: { sem1: 8.8, sem2: 7.94, sem3: 8.75, sem4: 7.87, sem5: 8.41, sem6: 9 } },
  { id: 24, name: "LAXMIKANT", usn: "3VY22UE025", attendance: 76, assignmentsCompleted: 4, feeStatus: "Paid", upcomingEvent: "Project Review", cgpa: 8.62, sgpa: { sem1: 8.55, sem2: 8.9, sem3: 7.88, sem4: 8.54, sem5: 9.18, sem6: 8.67 } },
  { id: 25, name: "MADIVALAMMA", usn: "3VY22UE026", attendance: 84, assignmentsCompleted: 5, feeStatus: "Pending", upcomingEvent: "Project Review", cgpa: 8.68, sgpa: { sem1: 8.98, sem2: 8.56, sem3: 8.6, sem4: 8.9, sem5: 8.46, sem6: 8.56 } },
  { id: 26, name: "MD FURQAN", usn: "3VY22UE029", attendance: 85, assignmentsCompleted: 4, feeStatus: "Pending", upcomingEvent: "AI Workshop", cgpa: 8.37, sgpa: { sem1: 7.82, sem2: 8.16, sem3: 8.97, sem4: 8.01, sem5: 9.18, sem6: 8.09 } },
  { id: 27, name: "MD AYAN OWAIS", usn: "3VY22UE032", attendance: 90, assignmentsCompleted: 5, feeStatus: "Paid", upcomingEvent: "Hackathon", cgpa: 8.38, sgpa: { sem1: 8.89, sem2: 8.59, sem3: 8.01, sem4: 7.97, sem5: 8.99, sem6: 7.84 } },
  { id: 28, name: "MD HUSSAIN", usn: "3VY22UE033", attendance: 86, assignmentsCompleted: 3, feeStatus: "Partial", upcomingEvent: "Hackathon", cgpa: 8.39, sgpa: { sem1: 8.19, sem2: 8.41, sem3: 8.21, sem4: 9.04, sem5: 8.44, sem6: 8.03 } },
  { id: 29, name: "MOHAMMED KAIF", usn: "3VY22UE034", attendance: 89, assignmentsCompleted: 5, feeStatus: "Paid", upcomingEvent: "AI Workshop", cgpa: 8.62, sgpa: { sem1: 8.48, sem2: 8.67, sem3: 8.06, sem4: 8.79, sem5: 8.77, sem6: 8.97 } },
  { id: 30, name: "MOHAMMED KAIF", usn: "3VY22UE035", attendance: 90, assignmentsCompleted: 4, feeStatus: "Partial", upcomingEvent: "Mid-term Exam", cgpa: 8.78, sgpa: { sem1: 9.04, sem2: 8.74, sem3: 8.93, sem4: 8.26, sem5: 8.83, sem6: 8.9 } },
  { id: 31, name: "MOHAMMED SOFI", usn: "3VY22UE036", attendance: 85, assignmentsCompleted: 3, feeStatus: "Paid", upcomingEvent: "Mid-term Exam", cgpa: 8.59, sgpa: { sem1: 8.71, sem2: 8.31, sem3: 8.7, sem4: 9.04, sem5: 8.97, sem6: 7.83 } },
  { id: 32, name: "MOHD MOHIUDDIN", usn: "3VY22UE037", attendance: 88, assignmentsCompleted: 3, feeStatus: "Paid", upcomingEvent: "Mid-term Exam", cgpa: 8.66, sgpa: { sem1: 8.85, sem2: 8.43, sem3: 8.62, sem4: 8.91, sem5: 8.68, sem6: 8.49 } },
  { id: 33, name: "NANDINI", usn: "3VY22UE038", attendance: 89, assignmentsCompleted: 4, feeStatus: "Pending", upcomingEvent: "Mid-term Exam", cgpa: 8.11, sgpa: { sem1: 7.88, sem2: 7.88, sem3: 7.87, sem4: 8.19, sem5: 8.88, sem6: 7.96 } },
  { id: 34, name: "POOJA", usn: "3VY22UE039", attendance: 77, assignmentsCompleted: 4, feeStatus: "Paid", upcomingEvent: "Mid-term Exam", cgpa: 8.61, sgpa: { sem1: 8.47, sem2: 8.52, sem3: 8.51, sem4: 9.12, sem5: 8.04, sem6: 8.98 } },
  { id: 35, name: "PREETHAM", usn: "3VY22UE040", attendance: 82, assignmentsCompleted: 5, feeStatus: "Paid", upcomingEvent: "Mid-term Exam", cgpa: 8.35, sgpa: { sem1: 8.15, sem2: 8.97, sem3: 8.11, sem4: 7.93, sem5: 8.31, sem6: 8.61 } },
  { id: 36, name: "PRERANA", usn: "3VY22UE041", attendance: 93, assignmentsCompleted: 4, feeStatus: "Paid", upcomingEvent: "Mid-term Exam", cgpa: 8.3, sgpa: { sem1: 7.8, sem2: 8.82, sem3: 9.05, sem4: 7.87, sem5: 7.89, sem6: 8.38 } },
  { id: 37, name: "RAHUL", usn: "3VY22UE042", attendance: 75, assignmentsCompleted: 5, feeStatus: "Paid", upcomingEvent: "Mid-term Exam", cgpa: 8.8, sgpa: { sem1: 9.17, sem2: 9.17, sem3: 8.3, sem4: 8.93, sem5: 8.15, sem6: 9.11 } },
  { id: 38, name: "RAJESH", usn: "3VY22UE043", attendance: 78, assignmentsCompleted: 5, feeStatus: "Paid", upcomingEvent: "Mid-term Exam", cgpa: 8.74, sgpa: { sem1: 8.36, sem2: 9.15, sem3: 8.39, sem4: 9.01, sem5: 8.9, sem6: 8.66 } },
  { id: 39, name: "RUCHI S M", usn: "3VY22UE044", attendance: 82, assignmentsCompleted: 3, feeStatus: "Pending", upcomingEvent: "AI Workshop", cgpa: 8.49, sgpa: { sem1: 7.95, sem2: 8.82, sem3: 9.13, sem4: 8.08, sem5: 8.75, sem6: 8.23 } },
  { id: 40, name: "S SANJEEVA", usn: "3VY22UE045", attendance: 83, assignmentsCompleted: 3, feeStatus: "Paid", upcomingEvent: "Hackathon", cgpa: 8.62, sgpa: { sem1: 8.58, sem2: 8.7, sem3: 8.72, sem4: 8.16, sem5: 8.59, sem6: 9 } },
  { id: 41, name: "SAI KIRAN", usn: "3VY22UE046", attendance: 87, assignmentsCompleted: 5, feeStatus: "Paid", upcomingEvent: "AI Workshop", cgpa: 8.54, sgpa: { sem1: 8.28, sem2: 8.94, sem3: 8.47, sem4: 7.97, sem5: 8.52, sem6: 9.05 } },
  { id: 42, name: "SHAHJAHAN", usn: "3VY22UE048", attendance: 79, assignmentsCompleted: 5, feeStatus: "Paid", upcomingEvent: "Mid-term Exam", cgpa: 8.17, sgpa: { sem1: 7.81, sem2: 8.79, sem3: 8.14, sem4: 7.92, sem5: 7.95, sem6: 8.42 } },
  { id: 43, name: "SHASHANK", usn: "3VY22UE050", attendance: 75, assignmentsCompleted: 3, feeStatus: "Paid", upcomingEvent: "Mid-term Exam", cgpa: 8.28, sgpa: { sem1: 8.49, sem2: 7.89, sem3: 8.57, sem4: 8.75, sem5: 7.98, sem6: 7.97 } },
  { id: 44, name: "SHREEKANT", usn: "3VY22UE051", attendance: 80, assignmentsCompleted: 3, feeStatus: "Partial", upcomingEvent: "Project Review", cgpa: 8.39, sgpa: { sem1: 8.57, sem2: 8.28, sem3: 8.78, sem4: 8.23, sem5: 8.22, sem6: 8.27 } },
  { id: 45, name: "SHREYARANI", usn: "3VY22UE052", attendance: 85, assignmentsCompleted: 3, feeStatus: "Paid", upcomingEvent: "Project Review", cgpa: 8.59, sgpa: { sem1: 8.99, sem2: 8.24, sem3: 8.68, sem4: 8.24, sem5: 8.26, sem6: 9.16 } },
  { id: 46, name: "SHRUSTI S M", usn: "3VY22UE053", attendance: 78, assignmentsCompleted: 5, feeStatus: "Paid", upcomingEvent: "AI Workshop", cgpa: 8.49, sgpa: { sem1: 8.83, sem2: 9.08, sem3: 8.39, sem4: 8.49, sem5: 8.19, sem6: 7.94 } },
  { id: 47, name: "SHRUTI", usn: "3VY22UE054", attendance: 88, assignmentsCompleted: 5, feeStatus: "Pending", upcomingEvent: "Project Review", cgpa: 8.36, sgpa: { sem1: 8.51, sem2: 8.61, sem3: 8.51, sem4: 8.18, sem5: 8.14, sem6: 8.2 } },
  { id: 48, name: "SHWETA", usn: "3VY22UE055", attendance: 81, assignmentsCompleted: 3, feeStatus: "Partial", upcomingEvent: "AI Workshop", cgpa: 8.71, sgpa: { sem1: 8.92, sem2: 8.96, sem3: 8.64, sem4: 9.07, sem5: 8.27, sem6: 8.39 } },
  { id: 49, name: "SUDEEP", usn: "3VY22UE056", attendance: 93, assignmentsCompleted: 5, feeStatus: "Paid", upcomingEvent: "Hackathon", cgpa: 8.76, sgpa: { sem1: 8.45, sem2: 9.13, sem3: 8.51, sem4: 9, sem5: 8.82, sem6: 8.68 } },
  { id: 50, name: "SUPRIYA", usn: "3VY22UE057", attendance: 81, assignmentsCompleted: 5, feeStatus: "Pending", upcomingEvent: "Hackathon", cgpa: 8.66, sgpa: { sem1: 8.81, sem2: 8.45, sem3: 8.52, sem4: 9.15, sem5: 8.14, sem6: 8.87 } },
  { id: 51, name: "SYED OWAIS", usn: "3VY22UE058", attendance: 86, assignmentsCompleted: 5, feeStatus: "Pending", upcomingEvent: "Project Review", cgpa: 8.52, sgpa: { sem1: 9.19, sem2: 8.69, sem3: 8.34, sem4: 8.31, sem5: 8.18, sem6: 8.42 } },
  { id: 52, name: "SYEDA ASMA", usn: "3VY22UE059", attendance: 81, assignmentsCompleted: 5, feeStatus: "Paid", upcomingEvent: "Hackathon", cgpa: 8.7, sgpa: { sem1: 9.09, sem2: 9.01, sem3: 8.51, sem4: 8, sem5: 8.66, sem6: 8.93 } },
  { id: 53, name: "VAISHNAVI", usn: "3VY22UE060", attendance: 87, assignmentsCompleted: 4, feeStatus: "Partial", upcomingEvent: "AI Workshop", cgpa: 8.56, sgpa: { sem1: 8.06, sem2: 8.63, sem3: 8.32, sem4: 9.06, sem5: 8.65, sem6: 8.65 } },
  { id: 54, name: "VRUKSHA", usn: "3VY22UE061", attendance: 89, assignmentsCompleted: 3, feeStatus: "Partial", upcomingEvent: "Hackathon", cgpa: 8.61, sgpa: { sem1: 8.88, sem2: 8.77, sem3: 8.3, sem4: 8.8, sem5: 8.88, sem6: 8.03 } },
  { id: 55, name: "Y VAISHNAVI", usn: "3VY22UE062", attendance: 81, assignmentsCompleted: 4, feeStatus: "Paid", upcomingEvent: "Hackathon", cgpa: 8.77, sgpa: { sem1: 9.08, sem2: 8.63, sem3: 8.18, sem4: 8.92, sem5: 8.72, sem6: 9.09 } },
  { id: 56, name: "GURUGOVIND", usn: "3VY23UE400", attendance: 90, assignmentsCompleted: 4, feeStatus: "Paid", upcomingEvent: "Hackathon", cgpa: 8.23, sgpa: { sem1: 8.78, sem2: 7.8, sem3: 7.97, sem4: 8.11, sem5: 8.19, sem6: 8.53 } },
  { id: 57, name: "GURURAJ", usn: "3VY23UE401", attendance: 94, assignmentsCompleted: 3, feeStatus: "Paid", upcomingEvent: "Mid-term Exam", cgpa: 8.49, sgpa: { sem1: 9.02, sem2: 8.56, sem3: 7.93, sem4: 8.83, sem5: 8.51, sem6: 8.12 } },
  { id: 58, name: "HARISH", usn: "3VY23UE402", attendance: 79, assignmentsCompleted: 5, feeStatus: "Paid", upcomingEvent: "Project Review", cgpa: 8.63, sgpa: { sem1: 8.81, sem2: 8.7, sem3: 8.22, sem4: 8.96, sem5: 9.09, sem6: 7.98 } },
  { id: 59, name: "SANIYA", usn: "3VY23UE403", attendance: 91, assignmentsCompleted: 4, feeStatus: "Pending", upcomingEvent: "Project Review", cgpa: 8.54, sgpa: { sem1: 8.51, sem2: 8.57, sem3: 8.96, sem4: 7.94, sem5: 8.89, sem6: 8.35 } },
  { id: 60, name: "SHARANABASAPPA", usn: "3VY23UE404", attendance: 81, assignmentsCompleted: 5, feeStatus: "Pending", upcomingEvent: "Project Review", cgpa: 8.42, sgpa: { sem1: 8.64, sem2: 7.99, sem3: 8.14, sem4: 8.88, sem5: 7.81, sem6: 9.06 } },
  { id: 61, name: "SUDEEP", usn: "3VY23UE405", attendance: 77, assignmentsCompleted: 3, feeStatus: "Paid", upcomingEvent: "Mid-term Exam", cgpa: 8.35, sgpa: { sem1: 8.03, sem2: 9.1, sem3: 8.27, sem4: 8.16, sem5: 8.45, sem6: 8.06 } },
  { id: 62, name: "SYED ASIF", usn: "3VY23UE406", attendance: 75, assignmentsCompleted: 3, feeStatus: "Pending", upcomingEvent: "AI Workshop", cgpa: 8.21, sgpa: { sem1: 8.2, sem2: 8.2, sem3: 8.39, sem4: 8.09, sem5: 8.54, sem6: 7.84 } },
];
