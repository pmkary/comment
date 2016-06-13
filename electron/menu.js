//
// Comment IV 
//    Copyright 2016 Kary Foundation, Inc.
//    Author: Pouya Kary <k@karyfoundation.org>
//

//
// ──────────────────────────────────────────────── I ──────────
//  :::::: M E N U : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────
//

// ──────────────────────────────────────────────────────────────────────────────────────────

	var CommentMainMenu = [
		
		//
		// ─── EDIT MENU ──────────────────────────────────────────────────────────────────
		//
		
			{
				label: 'Edit',
				submenu: [
					{
						label: 'Undo',
						accelerator: 'CmdOrCtrl+Z',
						role: 'undo'
					},
					{
						label: 'Redo',
						accelerator: 'Shift+CmdOrCtrl+Z',
						role: 'redo'
					},
					{
						type: 'separator'
					},
					{
						label: 'Cut',
						accelerator: 'CmdOrCtrl+X',
						role: 'cut'
					},
					{
						label: 'Copy',
						accelerator: 'CmdOrCtrl+C',
						role: 'copy'
					},
					{
						label: 'Paste',
						accelerator: 'CmdOrCtrl+V',
						role: 'paste'
					},
					{
						label: 'Select All',
						accelerator: 'CmdOrCtrl+A',
						role: 'selectall'
					},
				]
			},
			
		//
		// ─── ENGINE MENU ────────────────────────────────────────────────────────────────
		//
		
			{
				label: "Engine",
				submenu: [
					{
						label: 'Generate Comment',
						accelerator: ( function( ) {
							if ( process.platform == 'darwin' )
								return 'Command+Enter'
							else
								return 'F5'
						})(),
						click: function( item , focusedWindow ) {
							if ( focusedWindow )
								UI.CreateNewComment();
						}
					},
					{
						label: 'Copy Comment',
						accelerator: ( function( ) {
							if ( process.platform == 'darwin' )
								return 'Command+Alt+C'
							else
								return 'Alt+Crtl+C'
						})(),
						click: function( item , focusedWindow ) {
							if (focusedWindow)
								UI.CopyComment();
						}
					},
					{
						label: 'Generate and Copy HTML Code',
						click: function( item , focusedWindow ) {
							if ( focusedWindow )
								UI.CopyHTMLCode( );
						}
					},
				]
			},

		//
		// ─── COMMENT MODE MENU ──────────────────────────────────────────────────────────
		//

			{
				label: "Mode",
				submenu: [
					{
						label: 'Class Comment',
						accelerator: 'Command+1',
						click: function( item , focusedWindow ) {
							if ( focusedWindow )
								UI.ChangeCommentKind('class')
						}
					},
					{
						label: 'Flag Comment',
						accelerator: 'Command+2',
						click: function( item , focusedWindow ) {
							if ( focusedWindow )
								UI.ChangeCommentKind('flag')
						}
					},
					{
						type: 'separator'
					},
					{
						label: 'Section Comment',
						accelerator: 'Command+3',
						click: function( item , focusedWindow ) {
							if ( focusedWindow )
								UI.ChangeCommentKind('section')
						}
					},
					{
						label: 'SubSection Comment',
						accelerator: 'Command+4',
						click: function( item , focusedWindow ) {
							if ( focusedWindow )
								UI.ChangeCommentKind('subsection')
						}
					},
					{
						label: 'Line Comment',
						accelerator: 'Command+5',
						click: function( item , focusedWindow ) {
							if ( focusedWindow )
								UI.ChangeCommentKind('line')
						}
					},
					{
						label: 'SubLine Comment',
						accelerator: 'Command+6',
						click: function( item , focusedWindow ) {
							if ( focusedWindow )
								UI.ChangeCommentKind('subline')
						}
					},
					{
						type: 'separator'
					},
					{
						label: 'InSection Comment',
						accelerator: 'Command+7',
						click: function( item , focusedWindow ) {
							if ( focusedWindow )
								UI.ChangeCommentKind('insection')
						}
					},
					{
						label: 'Separator Comment',
						accelerator: 'Command+8',
						click: function( item , focusedWindow ) {
							if ( focusedWindow )
								UI.ChangeCommentKind('separator')
						}
					}
				]
			},
			
		//
		// ─── VIEW MENU ──────────────────────────────────────────────────────────────────
		//
		
			{
				label: 'View',
				submenu: [
					{
						label: 'Clean View',
						accelerator: 'CmdOrCtrl+R',
						click: function ( item , focusedWindow ) {
							if ( focusedWindow ) {
								UI.CleanCommentView( )
							}
						}
					},
					{
						label: 'Reload',
						click: function ( item , focusedWindow ) {
							if ( focusedWindow ) {
								focusedWindow.reload( )
							}
						}
					},
					{
						label: 'Toggle Full Screen',
						accelerator: ( function( ) {
							if ( process.platform == 'darwin' )
								return 'Ctrl+Command+F'
							else
								return 'F11'
						})(),
						click: function( item , focusedWindow ) {
							if ( focusedWindow )
								focusedWindow.setFullScreen( !focusedWindow.isFullScreen( ) )
						}
					},
					{
						label: 'Toggle Developer Tools',
						accelerator: ( function( ) {
							if ( process.platform == 'darwin' )
								return 'Alt+Command+I'
							else
								return 'Ctrl+Shift+I'
						})(),
						click: function( item , focusedWindow ) {
							if (focusedWindow)
								focusedWindow.toggleDevTools( )
						}
					},
				]
			},
			
		//
		// ─── WINDOW MENU ────────────────────────────────────────────────────────────────
		//
				
			{
				label: 'Window',
				role: 'window',
				submenu: [
					{
						label: 'Minimize',
						accelerator: 'CmdOrCtrl+M',
						role: 'minimize'
					},
					{
						label: 'Close',
						accelerator: 'CmdOrCtrl+W',
						role: 'close'
					},
				]
			},
			
		//
		// ─── HELP MENU ──────────────────────────────────────────────────────────────────
		//
		
			{
				label: 'Help',
				role: 'help',
				submenu: [
					{
						label: "Kary Foundation Style Comment Toturials",
						click: function( ) {
							require('electron').shell.openExternal('https://github.com/karyfoundation/comment/wiki')
						}
					},
					{
						label: "Kary Foundtation's Website",
						click: function( ) {
							require('electron').shell.openExternal('https://www.karyfoundation.org/')
						}
					},
					{
						label: "Comment IV on GitHub",
						click: function( ) {
							require('electron').shell.openExternal('https://github.com/karyfoundation/comment')
						}
					}
				]
			},
		
		// ────────────────────────────────────────────────────────────────────────────────
	];
// ──────────────────────────────────────────────────────────────────────────────────────────




//
// ────────────────────────────────────────────────────────────────────────────────────── II ──────────
//  :::::: O S   S E P C I F I C   A D J U S T M E N T S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────────
//

// ──────────────────────────────────────────────────────────────────────────────────────────

	var AboutPageButton = {
		label: 'About Comment IV',
		click: ( ) => {
			UI.OpenAboutPage( );
		}
	}

	if ( process.platform == 'darwin' ) {
		var name = require( 'electron' ).remote.app.getName( ) 
		CommentMainMenu.unshift(
			{
				label: name,
				submenu: [
					AboutPageButton,
					{
						type: 'separator'
					},
					{
						label: 'Services',
						role: 'services',
						submenu: [ ]
					},
					{
						type: 'separator'
					},
					{
						label: 'Hide ' + name,
						accelerator: 'Command+H',
						role: 'hide'
					},
					{
						label: 'Hide Others',
						accelerator: 'Command+Alt+H',
						role: 'hideothers'
					},
					{
						label: 'Show All',
						role: 'unhide'
					},
					{
						type: 'separator'
					},
					{
						label: 'Quit',
						accelerator: 'Command+Q',
						click: ( ) => {
							app.quit( )
						}
					},
				]
			}
		);

		// Window menu.
		CommentMainMenu[ 3 ].submenu.push(
			{
				type: 'separator'
			},
			{
				label: 'Bring All to Front',
				role: 'front'
			}
		);
	} else {
		CommentMainMenu[ 3 ].submenu.push( AboutPageButton );
	}
	
// ──────────────────────────────────────────────────────────────────────────────────────────
