import { useState } from "react";
import { Download, Smartphone, ShieldAlert, CheckCircle, Loader2 } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/BuildDownload.css";

export default function BuildDownload() {
  const [downloading, setDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);
  const downloadUrl = "/UniFix.apk";

  const handleDownload = async () => {
    setDownloading(true);
    
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = "UniFix.apk";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setDownloading(false);
      setDownloadComplete(true);
      
      setTimeout(() => {
        setDownloadComplete(false);
      }, 3000);
    }, 500);
  };

  return (
    <div className="build-page">
      <Navbar />

      <div className="build-container">
        <div className="build-card">
          <div className="build-header">
            <div className="build-icon">
              <Smartphone size={32} />
            </div>
            <div>
              <h1 className="build-title">@unifix-official/unifix</h1>
              <p className="build-subtitle">
                View and install apps built for internal distribution.
              </p>
            </div>
          </div>

          <div className="build-details">
            <div className="detail-row">
              <span className="detail-label">Build artifact</span>
              <span className="detail-value">APK</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Platform</span>
              <span className="detail-value">Android internal distribution build</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Status</span>
              <span className="detail-status finished">
                <span className="status-dot"></span>
                Finished
              </span>
            </div>
            <div className="detail-row">
              <span className="detail-label">File size</span>
              <span className="detail-value">87.3 MB</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Version</span>
              <span className="detail-value">v1.0.0</span>
            </div>
          </div>

          <div className="build-actions">
            <button 
              className={`btn-install ${downloading ? "downloading" : ""} ${downloadComplete ? "complete" : ""}`}
              onClick={handleDownload}
              disabled={downloading}
            >
              {downloading ? (
                <>
                  <Loader2 size={18} className="spin" />
                  Starting download...
                </>
              ) : downloadComplete ? (
                <>
                  <CheckCircle size={18} />
                  Download started!
                </>
              ) : (
                <>
                  <Download size={18} />
                  Install APK
                </>
              )}
            </button>
          </div>

          <div className="build-note">
            <ShieldAlert size={16} />
            <div className="build-note-content">
              <p className="build-note-title">Google Play Protect Notice</p>
              <p className="build-note-text">
                You may see "Play Protect hasn't seen this app before" or "App scan recommended". 
                This is normal as the app is in beta and not on Play Store yet. 
                Tap <strong>"Install without scanning"</strong> or <strong>"Install anyway" </strong>
                the app is completely safe with no malware.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}