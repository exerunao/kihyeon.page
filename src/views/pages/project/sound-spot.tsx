import React from 'react';
// Components
import PlanIntroSection from '@template/sound-spot/plan/Intro';
import ProblemSection from '@template/sound-spot/plan/Problem';
import InsightSection from '@template/sound-spot/plan/Insight';
import MotiveSection from '@template/sound-spot/plan/Motive';
import SolutionFunctionSection from '@template/sound-spot/plan/SolutionFunction';
import SoundspotBody from '@template/sound-spot/production/Body';
import SoundspotBodyShot from '@template/sound-spot/production/Body/Shot';
import SoundspotRemoteController from '@template/sound-spot/production/RemoteController';
import SoundspotRemoteControllerShot from '@template/sound-spot/production/RemoteController/Shot';
// Design System

const SoundSpot = () => (
  <>
    <PlanIntroSection />
    <ProblemSection />
    <InsightSection />
    <MotiveSection />
    <SolutionFunctionSection />
    <SoundspotBody />
    <SoundspotBodyShot />
    <SoundspotRemoteController />
    <SoundspotRemoteControllerShot />
  </>
);

export default SoundSpot;
