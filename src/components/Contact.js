import { CONTACT } from "assets/data"
import { motion } from "framer-motion"

const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <h2 className="my-10 text-center text-4xl">Thông tin liên lạc</h2>
            <div className="text-center tracking-tighter">
                <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className="my-4">
                    {CONTACT.address}
                </motion.p>
                <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 0.5 }} className="my-4">
                    {CONTACT.phoneNo}
                </motion.p>
                <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className="my-4">
                    {CONTACT.email}
                </motion.p>
                <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 0.5 }} className="my-4">
                    {CONTACT.birthday}
                </motion.p>
            </div>
        </div>
    )
}

export default Contact