import { connect } from "react-redux"
import { motion } from 'framer-motion'
import { checkAuthenticated, load_user, refresh } from '../../redux/actions/users/auth';
import { useEffect } from "react";
import BottomBar from "../../components/navigation/BottomBar";

function Layout({ checkAuthenticated, load_user, refresh, children }) {

  useEffect(() => {
    refresh()
    checkAuthenticated();
    load_user();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0.7, }}
      animate={{ opacity: 1, }}
      transition={{
        duration: 0.3,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      className="flex justify-between bg-gradient-to-b from-gray-900 from-30% to-cyan-700 pt-6 h-screen w-screen overflow-scroll"
    >
      {children}
      <BottomBar />
    </motion.div >
  )
}

// const mapStateToProps = state => ({

// })

export default connect(null, { checkAuthenticated, load_user, refresh })(Layout);