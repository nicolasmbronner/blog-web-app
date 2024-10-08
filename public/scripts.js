function getCurrentTheme( ) {
    return document.body.classList.contains( "dark-theme" ) ? "dark" : "light";
}

function getThemeColors( theme)  {
    return theme === "dark"
        ? { background: "var( --swal-background-dark )", color: "var( --swal-text-dark )" }
        : { background: 'var(--swal-background-light)', color: 'var(--swal-text-light)' };
}

export function showBlogResetNotification( ) {
    const theme = getCurrentTheme( );
    const colors = getThemeColors( theme );

    Swal.fire({
        target: document.getElementById('toast-container'),
        position: "bottom-end",
        showConfirmButton: false,
        text: "Blog reset.",
        timer: 6000,
        toast: true,
        timerProgressBar: true,
        showCloseButton: true,
        icon: "info",

        background: colors.background,
        color: colors.color,
        customClass: {
            'container': 'trial-swal-container'
        }
    } );
}

export function showBlogPreResetNotification() {
    const theme = getCurrentTheme( );
    const colors = getThemeColors( theme );

    Swal.fire({
        target: document.getElementById('toast-container'),
        position: "bottom-end",
        showConfirmButton: false,
        text: "Blog reset soon.",
        timer: 4000,
        toast: true,
        timerProgressBar: true,
        showCloseButton: true,
        icon: "info",

        background: colors.background,
        color: colors.color,
        customClass: {
            'container': 'trial-swal-container'
        }
    } );
}

export function showCancelCreationEditConfirmation() {
    const theme = getCurrentTheme( );
    const colors = getThemeColors( theme );

    return Swal.fire({

        title: 'Trash Changes?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        width: 300,

        background: colors.background,
        color: colors.color,
        customClass: {
            popup: "custom-popup",
            confirmButton: "custom-cancel-edit-button",
            cancelButton: "custom-cancel-button",
            actions: "custom-actions"
        }
    } );
}

export function showDeleteArticleConfirmation() {
    const theme = getCurrentTheme();
    const colors = getThemeColors(theme);
    
    return Swal.fire({
        title: 'Delete Article?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel',
        width: 300,

        background: colors.background,
        color: colors.color,
        customClass: {
            popup: "custom-popup",
            confirmButton: "custom-delete-article-button",
            cancelButton: "custom-cancel-button",
            actions: "custom-actions"
        }
    } );
}