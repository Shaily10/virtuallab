import React from 'react'
import { Route, Routes } from 'react-router-dom';
import PsNavbar from './components/Subjects/Ps/PsNavbar.js';
import PsIntro from './components/Subjects/Ps/PsIntro.js';
import PsObj from './components/Subjects/Ps/PsObj.js';
import PsLoe from './components/Subjects/Ps/PsLoe.js';
import PsAim from './components/Subjects/Ps/PsAim.js';
import PsObjective from './components/Subjects/Ps/PsObjective.js';
import PsTheory from './components/Subjects/Ps/PsTheory.js';
import PsPret from './components/Subjects/Ps/PsPret.js';
import PsProcedure from './components/Subjects/Ps/PsProcedure.js';
import PsExp1 from './components/Subjects/Ps/PsExp1.js';
import PsExp2 from './components/Subjects/Ps/PsExp2.js';
import PsExp3 from './components/Subjects/Ps/PsExp3.js';
import PsExp4 from './components/Subjects/Ps/PsExp4.js';
import PsExp5 from './components/Subjects/Ps/PsExp5.js';
import PsExp6 from './components/Subjects/Ps/PsExp6.js';
import PsExp7 from './components/Subjects/Ps/PsExp7.js';
import PsExp8 from './components/Subjects/Ps/PsExp8.js';
import PsExp9 from './components/Subjects/Ps/PsExp9.js';
import PsExp10 from './components/Subjects/Ps/PsExp10.js';
import PsTa from './components/Subjects/Ps/PsTa.js';
import PsCa from './components/Subjects/Ps/PsCa.js';
import PsFb from './components/Subjects/Ps/PsFb.js';

function PsMain() {
  return (
    <Routes>
      <Route path="/sub/ps" element={<PsNavbar />} />
      <Route path="/sub/ps/intro" element={<PsIntro />} />
      <Route path="/sub/ps/obj" element={<PsObj />} />
      <Route path="/sub/ps/loe" element={<PsLoe />} />
      <Route path="/sub/ps/loe/exp1/aim" element={<PsAim />} />
      <Route path="/sub/ps/loe/exp1/objective" element={<PsObjective />} />
      <Route path="/sub/ps/loe/exp1/theory" element={<PsTheory />} />
      <Route path="/sub/ps/loe/exp1/pretest" element={<PsPret />} />
      <Route path="/sub/ps/loe/exp1/procedure" element={<PsProcedure />} />
      <Route path="/sub/ps/loe/exp1" element={<PsExp1 />} />
      <Route path="/sub/ps/loe/exp2" element={<PsExp2 />} />
      <Route path="/sub/ps/loe/exp3" element={<PsExp3 />} />
      <Route path="/sub/ps/loe/exp4" element={<PsExp4 />} />
      <Route path="/sub/ps/loe/exp5" element={<PsExp5 />} />
      <Route path="/sub/ps/loe/exp6" element={<PsExp6 />} />
      <Route path="/sub/ps/loe/exp7" element={<PsExp7 />} />
      <Route path="/sub/ps/loe/exp8" element={<PsExp8 />} />
      <Route path="/sub/ps/loe/exp9" element={<PsExp9 />} />
      <Route path="/sub/ps/loe/exp10" element={<PsExp10 />} />
      <Route path="/sub/ps/Ta" element={<PsTa />} />
      <Route path="/sub/ps/Ca" element={<PsCa />} />
      <Route path="/sub/ps/fb" element={<PsFb />} />
      </Routes>
  )
}

export default PsMain