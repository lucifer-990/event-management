import Link from "next/link"
import { BiMessageDetail } from "react-icons/bi"
import { BsFillSendFill, BsTelephoneOutbound } from "react-icons/bs"

const Footer = () => {
  return (
      <footer className="mt-16 border-t-4 border-black p-4">
          <div className="container mx-auto px-4">
              <Link href="/" className="font-black text-tertiary-light">
                  EventX
              </Link>
              <h4 className="font-semibold text-[30px] py-6">Contact</h4>
              <div className="flex flex-wrap gap-16 items-center justify-between">
                  <div className="flex-1">
                      <p>123 Road</p>
                      <div className="flex items-center py-4">
                          <BsFillSendFill />
                          <p className="ml-2">makaut 10X</p>
                      </div>
                      <div className="flex items-center">
                          <BsTelephoneOutbound />
                          <p className="ml-2">123-456-789</p>
                      </div>
                      <div className="flex items-center pt-4 mb-4">
                          <BiMessageDetail />
                          <p className="ml-2">makaut 10X</p>
                      </div>
                  </div>
                  <div className="flex-1 md:text-center">
                      <p className="pb-4">Our events</p>
                      <p className="pb-4">Get in Touch</p>
                      <p className="pb-4">Privacy policy</p>
                      <p className="pb-4">Terms of service</p>
                      <p>Contribute</p>
                  </div>
                  <div className="flex-1 md:text-right">
                      <p className="pb-4">Gaming</p>
                      <p className="pb-4">Technology</p>
                      <p className="pb-4">Fitness</p>
                      <p className="pb-4">sports</p>
                      <p>Makaut</p>
                  </div>
              </div>
          </div>  
          <div className="bg-tertiary-dark h-10 md:h-[30px] mt-16 w-full bottom-0 left-0 text-white items-center flex justify-center font-bold text-lg"> created with ❤️ by team Byte-Blazers 2025 © All rights reserved by Byte-Blazers</div>
      </footer>
  )
}

export default Footer
