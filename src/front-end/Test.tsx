import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Test = () => {
  const navigate = useNavigate();
  const [chosenFile, setChosenFile] = useState<string>();
  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    return window.api.chooseFile(
      {
        title: 'Choose a file',
        withHiddenFiles: true,
        fileOrDirectory: 'openFile',
      },
      ({ paths }) => setChosenFile(paths[0]),
      ({ errorMessage }) => setCancelled(errorMessage === 'userCancelled')
    );
  }, []);

  return (
    <p>
      <span>This is a test</span>
      <a role="button" onClick={() => navigate('/', { replace: true })}>
        Click
      </a>
      {cancelled ? (
        <span>
          <br />
          User cancelled
        </span>
      ) : null}
      {chosenFile ? (
        <span>
          <br />
          {chosenFile}
        </span>
      ) : null}
    </p>
  );
};
