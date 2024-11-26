export function MapSection() {
  return (
    <div className="w-full h-full bg-[#1a1a2e]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280949928!2d-74.11976341508873!3d40.697403441436425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1679305457188!5w!3h!4m2!3m1!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62"
        width="100%"
        height="100%"
        style={{ 
          border: 0,
          filter: 'brightness(0.7) contrast(1.2) hue-rotate(190deg) saturate(1.5)',
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}