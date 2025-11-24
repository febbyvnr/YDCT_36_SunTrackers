import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FloatingLabel, Button, Alert } from "react-bootstrap";
import { toast } from "sonner";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Untuk ikon mata

const FormLogin = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ username: "", password: "" });
    const [showPassword, setShowPassword] = useState(false); // State untuk toggle password visibility

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (user.username === "" || user.password === "") {
            toast.error("Username and Password Cannot Empty!");
            return;
        } else if (user.password.length !== 5 || user.username !== "username" || user.password !== "password") {
            toast.error("Username and Password Invalid !");
            return;
        } else {
            const newUser = {
                ...user,
                loginAt: new Date(),
            };
            localStorage.setItem("user", JSON.stringify(newUser));
            toast.success("Login Success!");
            setTimeout(() => {
                navigate("/dashboard");
            }, 1000);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev); 
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: "700px", margin: "auto" }}>
            <Alert variant="info">
                <strong>Info!</strong> 
            </Alert>
            <FloatingLabel controlId="floatingInput" label="Username" className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="name@example.com"
                    name="username"
                    onChange={handleChange}
                />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3" style={{ position: "relative" }}>
                <Form.Control
                    type={showPassword ? "text" : "password"} 
                    name="password"
                    onChange={handleChange}
                    autoComplete="off"
                />
                <span
                    onClick={togglePasswordVisibility}
                    style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: "#6c757d",
                    }}
                >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
            </FloatingLabel>
            <Button variant="primary" type="submit" className="mt-3 w-100">
                Login
            </Button>
        </form>
    );
};

export default FormLogin;
