import { useState } from "react";
import {
  User,
  Mail,
  Briefcase,
  AlertCircle,
  MessageSquare,
  CheckCircle,
  XCircle,
  Send,
  Loader2
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/DeleteAccountRequest.css";

export default function DeleteAccountRequest() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    reason: "",
    otherReason: "",
    feedback: "",
    confirmed: false
  });

  const REASONS = [
    { value: "privacy", label: "Privacy concerns" },
    { value: "spam", label: "Too many notifications / spam" },
    { value: "not_using", label: "No longer using the app" },
    { value: "found_alternative", label: "Found a better alternative" },
    { value: "data_collection", label: "Data collection concerns" },
    { value: "technical_issues", label: "Technical issues / bugs" },
    { value: "other", label: "Other" }
  ];

  const ROLES = [
    { value: "student", label: "Student" },
    { value: "teacher", label: "Teacher" },
    { value: "staff", label: "Staff Member" },
    { value: "other", label: "Other" }
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (e) => {
    setForm({ ...form, confirmed: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!form.name.trim()) {
      setError("Please enter your full name.");
      setLoading(false);
      return;
    }

    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    if (!form.role) {
      setError("Please select your role.");
      setLoading(false);
      return;
    }

    if (!form.reason) {
      setError("Please select a reason for deletion.");
      setLoading(false);
      return;
    }

    if (form.reason === "other" && !form.otherReason.trim()) {
      setError("Please specify your reason.");
      setLoading(false);
      return;
    }

    if (!form.confirmed) {
      setError("Please confirm that you understand this action is irreversible.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/delete-account/request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          role: form.role,
          reason: form.reason === "other" ? form.otherReason.trim() : REASONS.find(r => r.value === form.reason)?.label,
          feedback: form.feedback.trim()
        })
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setForm({
          name: "",
          email: "",
          role: "",
          reason: "",
          otherReason: "",
          feedback: "",
          confirmed: false
        });
      } else {
        setError(data.message || "Failed to submit request. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="delete-page">
        <Navbar />
        <div className="delete-container">
          <div className="delete-card success-card">
            <div className="success-icon">
              <CheckCircle size={48} />
            </div>
            <h2 className="success-title">Request Submitted Successfully!</h2>
            <p className="success-text">
              Your account deletion request has been received. We will review it and get back to you within 24-48 hours.
            </p>
            <p className="success-note">
              A confirmation email has been sent to your registered email address.
            </p>
            <a href="/" className="btn-home">Return to Home</a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="delete-page">
      <Navbar />

      <div className="delete-container">
        <div className="delete-card">
          <div className="delete-header">
            <div className="delete-icon">
              <AlertCircle size={28} />
            </div>
            <div>
              <h1 className="delete-title">Delete Account Request</h1>
              <p className="delete-subtitle">
                Please fill out the form below to request account deletion.
              </p>
            </div>
          </div>

          <form className="delete-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>
                  <User size={14} style={{ marginRight: '6px' }} />
                  Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  <Mail size={14} style={{ marginRight: '6px' }} />
                  Registered Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your registered email"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>
                <Briefcase size={14} style={{ marginRight: '6px' }} />
                Your Role <span className="required">*</span>
              </label>
              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                required
              >
                <option value="">Select your role</option>
                {ROLES.map((role) => (
                  <option key={role.value} value={role.value}>
                    {role.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>
                <AlertCircle size={14} style={{ marginRight: '6px' }} />
                Reason for Deletion <span className="required">*</span>
              </label>
              <select
                name="reason"
                value={form.reason}
                onChange={handleChange}
                required
              >
                <option value="">Select a reason</option>
                {REASONS.map((reason) => (
                  <option key={reason.value} value={reason.value}>
                    {reason.label}
                  </option>
                ))}
              </select>
            </div>

            {form.reason === "other" && (
              <div className="form-group">
                <label>
                  <MessageSquare size={14} style={{ marginRight: '6px' }} />
                  Please specify your reason <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="otherReason"
                  value={form.otherReason}
                  onChange={handleChange}
                  placeholder="Tell us why you want to delete your account"
                  required
                />
              </div>
            )}

            <div className="form-group">
              <label>
                <MessageSquare size={14} style={{ marginRight: '6px' }} />
                Additional Feedback
              </label>
              <textarea
                name="feedback"
                value={form.feedback}
                onChange={handleChange}
                placeholder="Any additional feedback or comments? (Optional)"
                rows="3"
              />
            </div>

            <div className="form-group checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={form.confirmed}
                  onChange={handleCheckbox}
                  required
                />
                <span>
                  I understand that this action is <strong>irreversible</strong> and all my data will be permanently deleted.
                </span>
              </label>
            </div>

            {error && (
              <div className="error-box">
                <XCircle size={18} />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              className={`btn-submit ${loading ? "loading" : ""}`}
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Submit Request
                </>
              )}
            </button>

            <p className="form-note">
              <AlertCircle size={14} />
              We will review your request and get back to you within 24-48 hours.
              A confirmation email will be sent to your registered email.
            </p>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}