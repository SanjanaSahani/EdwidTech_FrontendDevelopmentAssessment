import { useRef, useState } from 'react';

export default function ImageUploader({ value, onChange }) {
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);

  function handleFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    const isValidType =
      file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png';
    if (!isValidType) {
      setError('Only JPG and PNG images are allowed.');
      onChange('');
      return;
    }

    const maxBytes = 1 * 1024 * 1024;
    if (file.size > maxBytes) {
      setError('Image must be less than 1MB.');
      onChange('');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setError('');
      onChange(reader.result);
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3">
        <div className="w-16 h-16 rounded-md border border-slate-200 bg-slate-50 overflow-hidden flex items-center justify-center">
          {value ? (
            <img src={value} alt="Preview" className="w-full h-full object-cover" />
          ) : (
            <span className="text-xs text-slate-400">No image</span>
          )}
        </div>
        <div className="space-y-1">
          <input
            type="file"
            accept="image/png,image/jpeg"
            ref={fileInputRef}
            onChange={handleFile}
            className="text-xs"
          />
          <p className="text-[11px] text-slate-500">JPG/PNG, max 1MB</p>
        </div>
      </div>
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}