export default function ButtonComponent({ label, onClick, severity = "primary", isloading = false }) {
    return (
        <div>
            <input
                type="submit"
                value={isloading ? "Loading..." : label}
                className={`btn btn-${severity}`}
                onClick={onClick}
                disabled={isloading}
            />
        </div>
    );
}