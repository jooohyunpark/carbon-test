import React from 'react';
import { ProgressIndicator, ProgressStep } from 'carbon-components-react';

const Progress = () => {
  return (
    <ProgressIndicator currentIndex={1}>
      <ProgressStep
        description="Step 1: Getting started with Carbon Design System"
        label="First step"
      />
      <ProgressStep
        description="Step 2: Getting started with Carbon Design System"
        label="Second step with tooltip"
      />
      <ProgressStep
        description="Step 3: Getting started with Carbon Design System"
        label="Third step with tooltip"
      />
    </ProgressIndicator>
  );
};

export default Progress;
