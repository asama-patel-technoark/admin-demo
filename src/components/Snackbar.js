import React from 'react'
import { Snackbar, SnackbarContent, Slide, IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

export default function PositionedSnackbar({ toast, setToast }) {
  const handleClose = () => {
    setToast({ state: false, message: '' })
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={toast.state}
        classes={{ root: `toastr-${toast.color}` }}
        onClose={handleClose}
        autoHideDuration={5000}
      >
        <SnackbarContent
          message={toast.message}
          action={
            <IconButton
              aria-label='close'
              color='inherit'
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          }
        />
      </Snackbar>
    </div>
  )
}
