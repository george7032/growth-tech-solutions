import { useState } from "react";

import { ChatLauncher, ChatWidget } from "@/components/site/ChatWidget";
import { CONTACT } from "@/lib/site-data";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39c1.45.79 3.08 1.2 4.74 1.2 5.46 0 9.9-4.44 9.9-9.9S17.5 2 12.04 2Zm0 18.03c-1.5 0-2.98-.4-4.27-1.16l-.31-.18-3.15.83.84-3.07-.2-.32a8.13 8.13 0 0 1-1.25-4.33c0-4.49 3.65-8.14 8.14-8.14 4.49 0 8.14 3.65 8.14 8.14s-3.65 8.23-7.94 8.23Zm4.47-6.1c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.25-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.8-.2-.47-.4-.4-.55-.41h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.68 2.65 4.08 3.62 2.4.96 2.4.64 2.83.6.43-.04 1.4-.57 1.6-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

export function FloatingActions() {
  const [open, setOpen] = useState(false);
  const message = encodeURIComponent("Hello Zebnex, I'd like to talk about a project.");

  return (
    <>
      <ChatWidget open={open} onOpenChange={setOpen} />
      <div className="fixed right-4 bottom-5 z-50 flex flex-col items-center gap-3 sm:right-6">
        <a
          href={`https://wa.me/${CONTACT.whatsapp}?text=${message}`}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Chat with us on WhatsApp"
          className="flex size-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform hover:scale-105"
        >
          <WhatsAppIcon className="size-6" />
        </a>
        <ChatLauncher open={open} onClick={() => setOpen((v) => !v)} />
      </div>
    </>
  );
}
