
// enum - It places a set of fixed string literal together/in one place

// -------------------- normally --------------------
type UserRole1 = "Admin" | "Editor" | "Viewer";

const canEdit1 = (role: UserRole1) => {
    if(role === "Admin" || role === "Editor") {
        return true;
    }
    else {
        return false;
    }
}
console.log(canEdit1("Admin"));


// ---------------------- using enum ----------------------
enum UserRole2 {
    Admin = "Admin",
    Editor = "Editor",
    Viewer = "Viewer"
}

const canEdit2 = (role:  UserRole2) => {
    if(role === UserRole2.Admin || role === UserRole2.Editor) {
        return true;
    }
    else return false;
}
console.log(canEdit2(UserRole2.Viewer));
console.log(canEdit2(UserRole2.Editor));
console.log(canEdit2(UserRole2.Admin));