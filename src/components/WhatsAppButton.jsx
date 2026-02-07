import './WhatsAppButton.css'

function WhatsAppButton({ isCartOpen }) {
  // Número de WhatsApp Colombia (código país 57 + número celular)
  const phoneNumber = '573104567890' // Formato: 57 + 10 dígitos sin espacios
  const message = encodeURIComponent('Hola, me gustaría conocer más sobre sus chiles mexicanos premium.')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a 
      href={whatsappUrl}
      className={`whatsapp-button ${isCartOpen ? 'hidden' : ''}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <svg 
        viewBox="0 0 32 32" 
        className="whatsapp-icon"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          fill="currentColor" 
          d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-5.247 1.407 1.407-5.247-0.292-0.507c-1.224-2.162-1.87-4.588-1.87-7.070 0-7.444 6.056-13.5 13.5-13.5s13.5 6.056 13.5 13.5-6.036 13.579-13.421 13.579zM21.803 19.288c-0.365-0.183-2.159-1.066-2.494-1.188s-0.578-0.183-0.822 0.183c-0.244 0.366-0.944 1.188-1.158 1.433s-0.426 0.274-0.791 0.091c-0.365-0.183-1.542-0.569-2.937-1.812-1.086-0.97-1.818-2.166-2.032-2.531s-0.021-0.563 0.161-0.746c0.165-0.165 0.365-0.426 0.548-0.64s0.244-0.365 0.365-0.609c0.122-0.244 0.061-0.457-0.030-0.64s-0.822-1.981-1.127-2.713c-0.296-0.713-0.598-0.617-0.822-0.628-0.213-0.011-0.456-0.013-0.7-0.013s-0.64 0.091-0.975 0.457c-0.335 0.365-1.279 1.249-1.279 3.045s1.31 3.533 1.492 3.777c0.183 0.244 2.58 3.945 6.253 5.533 0.874 0.378 1.556 0.604 2.088 0.773 0.878 0.279 1.677 0.24 2.308 0.145 0.704-0.105 2.159-0.883 2.464-1.735s0.305-1.584 0.213-1.735c-0.091-0.152-0.335-0.244-0.7-0.427z"
        />
      </svg>
      <span className="whatsapp-tooltip">¿Necesita ayuda? Escríbanos</span>
    </a>
  )
}

export default WhatsAppButton
