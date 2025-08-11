import { useRef, useState, useEffect } from 'react'
import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';
import { Button } from '../ui/button';
import { ArrowDown } from 'lucide-react';


const PDF = () => {
  const resumePath = "/Resume.pdf"
  return (
    <div className="flex flex-col items-center mt-8">
      <div className="relative">
        <iframe 
          src={`${resumePath}#navpanes=0`}
          className="w-[800px] h-[1190px]"
        ></iframe>
        <a href={resumePath} download>
          <Button
            variant="gradient"
            className="absolute top-2 right-20 rounded-full z-10 w-10 h-10"
          >
            <ArrowDown/>
          </Button>
        </a>
      </div>
      <a href={resumePath} download>
        <Button variant="gradient" className="rounded-full mt-5 z-0">
          Download Resume
        </Button>
      </a>
    </div>
  )
}

export default PDF;