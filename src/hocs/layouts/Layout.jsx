import { connect } from "react-redux"
import { motion } from 'framer-motion'

function Layout({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0.7, }}
      animate={{ opacity: 1, }}
      transition={{
        duration: 0.3,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      className="flex justify-between bg-gradient-to-b from-gray-900 from-30% to-cyan-700 pt-6 h-screen overflow-scroll"
    >
      {children}
    </motion.div >
  )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {

})(Layout)