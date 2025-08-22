// src/pages/features/Attendance.tsx
import FeatureTemplate from "../../components/FeatureTemplate";

const Attendance = () => {
  return (
    <FeatureTemplate title="Attendance" icon="📍">
      <p>
        Zero proxy attendance with geo-fencing and face recognition.
      </p>
      <p>
        Employees can check-in/out only within defined office zones using GPS and Wi-Fi.
      </p>
      <p>
        Face recognition prevents buddy punching with contactless authentication.
      </p>
      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>Geo-fencing for remote and field employees</li>
        <li>Face recognition with liveness detection</li>
        <li>Real-time attendance dashboard</li>
        <li>Auto-calculate late, early leave, and overtime</li>
        <li>Integration with leave and payroll systems</li>
      </ul>
    </FeatureTemplate>
  );
};

export default Attendance;