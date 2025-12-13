
// ----------------- Union -----------------

type Roles = "admin" | "user";  // literal type

const getDashboard = (givenRole:Roles) => {
    if(givenRole==="admin") console.log("Admin Dashboard");
    else console.log("User Dashboard");
}
getDashboard("admin");



// ----------------- Intersection -----------------

type Employee = {
    name: string;
    id: number;
}

type Manager = {
    teamSize: number;
}

const samirAli: (Employee & Manager) = {
    name: "Sab",
    id: 123,
    teamSize: 10
}
console.log(samirAli);