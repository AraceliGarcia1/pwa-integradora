import React,{useEffect} from 'react';
import { Button, UncontrolledTooltip } from 'reactstrap';
import { toast, Bounce } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../AppMain/AuthContext';
import routeConstant from '../../../router/routeConstant';

const UserBox = () => {
  const { logout } = useAuth();
  const history = useHistory();

  const cerrarSesion = () => {
    logout();
    history.push(routeConstant.LOGIN);
  };

  const notify2 = () => {
    toast("You don't have any new items in your calendar for today! Go out and play!", {
      transition: Bounce,
      closeButton: true,
      autoClose: 5000,
      position: 'bottom-center',
      type: 'success'
    });
  };
  const [isReadyForInstall, setIsReadyForInstall] = React.useState(false);

useEffect(() => {
  window.addEventListener("beforeinstallprompt", (event) => {
    // Prevent the mini-infobar from appearing on mobile.
    event.preventDefault();
    console.log("👍", "beforeinstallprompt", event);
    // Stash the event so it can be triggered later.
    window.deferredPrompt = event;
    // Remove the 'hidden' class from the install button container.
    setIsReadyForInstall(true);
  });
}, []);

async function downloadApp() {
  console.log("👍", "butInstall-clicked");
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    // The deferred prompt isn't available.
    console.log("oops, no prompt event guardado en window");
    return;
  }
  // Show the install prompt.
  promptEvent.prompt();
  // Log the result
  const result = await promptEvent.userChoice;
  console.log("👍", "userChoice", result);
  // Reset the deferred prompt variable, since
  // prompt() can only be called once.
  window.deferredPrompt = null;
  // Hide the install button.
  setIsReadyForInstall(false);
}


  return (
    <div className="header-btn-lg pe-0">
      <div className="widget-content p-0">
        <div className="widget-content-wrapper">
          <div className="widget-content-left ms-3 header-user-info">
            <div className="widget-heading">
              Alina Mclourd
            </div>
          </div>
          <div className="widget-content-right header-user-info ms-3">
            <Button className="p-1" size="lg" onClick={cerrarSesion} color="dark" id="Tooltip-1">
              <i className="pe-7s-power" />
            </Button>
            {isReadyForInstall&& <Button onClick={downloadApp} className="p-1" size="lg" color="dark" id="Tooltip-1">
              Descargar
            </Button>}
            <UncontrolledTooltip placement="bottom" target={'Tooltip-1'}>
              Cerrar sesión
            </UncontrolledTooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBox;
