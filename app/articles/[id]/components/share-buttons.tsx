"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Link2 
} from "lucide-react";
import { toast } from "sonner";

export function ShareButtons() {
  const [shareUrl, setShareUrl] = useState("");

  
  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(window.location.href); 
    }
  }, []);

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    toast.success("Link copied to clipboard!");
  };

  return (
    <div className="flex gap-3 sticky top-24">
      <Button
        variant="default"
        size="icon"
        onClick={() => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}`)}
        disabled={!shareUrl} 
      >
        <Twitter className="h-4 w-4" />
      </Button>
      <Button
        variant="default"
        size="icon"
        onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`)}
        disabled={!shareUrl} 
      >
        <Facebook className="h-4 w-4" />
      </Button>
      <Button
        variant="default"
        size="icon"
        onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`)}
        disabled={!shareUrl} 
      >
        <Linkedin className="h-4 w-4" />
      </Button>
      <Button
        variant="default"
        size="icon"
        onClick={copyLink}
        disabled={!shareUrl} 
      >
        <Link2 className="h-4 w-4" />
      </Button>
    </div>
  );
}
