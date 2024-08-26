const { createApp } = Vue;

createApp( {
    data() {
        return {
            products: {
                'sm': {
                    'id': 'sm',
                    'name': 'StorageManager',
                    'supportOptions': {
                        'no-scan': {
                            'id': 'no-scan',
                            'name': 'Scanning not working',
                            'display': 'Please ensure that the barcode is not too far away (up to roughly four meters should work fine), that it is a barcode and that the surface the code is on is entirely visible and not wrinkled in any shape or form. If it still does not work, contact me below.',
                            'action': {
                                'type': 'link',
                                'href': '/support/contact',
                                'display': 'Contact me'
                            }
                        },
                        'contact': {
                            'id': 'contact',
                            'name': 'Problem not in this list',
                            'display': 'Please use the contact form and include as much information as possible',
                            'action': {
                                'type': 'link',
                                'href': '/support/contact',
                                'display': 'Contact me'
                            }
                        }
                    }
                },
                'qr': {
                    'id': 'qr',
                    'name': 'QR & Barcode Insight',
                    'supportOptions': { 
                        'history': {
                            'id': 'history',
                            'name': 'History missing',
                            'display': 'In the settings tab, under History Settings, ensure that history is enabled! If your issue is regarding only a few entries being kept, please, in the same page, check if there is history size limit set and if so, consider increasing or removing it. If it still does not work, contact me below',
                            'action': {
                                'type': 'link',
                                'href': '/support/contact',
                                'display': 'Contact me'
                            }
                        },
                        'no-scan': {
                            'id': 'no-scan',
                            'name': 'Scanning not working',
                            'display': 'Please ensure that the code is not too far away (up to roughly four meters should work fine) and that the surface the code is on is entirely visible and not wrinkled in any shape or form. If it still does not work, contact me below.',
                            'action': {
                                'type': 'link',
                                'href': '/support/contact',
                                'display': 'Contact me'
                            }
                        },
                        'contact': {
                            'id': 'contact',
                            'name': 'Problem not in this list',
                            'display': 'Please use the contact form and include as much information as possible',
                            'action': {
                                'type': 'link',
                                'href': '/support/contact',
                                'display': 'Contact me'
                            }
                        }
                    }
                },
                'smuL': { 
                    'id': 'smuL',
                    'name': 'SimpleMediaUpscalerLite',
                    'supportOptions': { 
                        'gh': {
                            'id': 'gh',
                            'name': 'Any problem',
                            'display': 'Please head to GitHub and open an issue',
                            'action': {
                                'type': 'link',
                                'href': 'https://github.com/janishutz/SimpleMediaUpscalerLite/issues/new',
                                'display': 'Open an Issue'
                            }
                        }
                    }
                },
                'le': {
                    'id': 'le',
                    'name': 'libreevent',
                    'supportOptions': { 
                        'gh': {
                            'id': 'gh',
                            'name': 'Any problem',
                            'display': 'Please head to GitHub and open an issue',
                            'action': {
                                'type': 'link',
                                'href': 'https://github.com/janishutz/libreevent/issues/new',
                                'display': 'Open an Issue'
                            }
                        }
                    }
                },
                'mp': {
                    'id': 'mp',
                    'name': 'MusicPlayer',
                    'supportOptions': { 
                        'not-ready': {
                            'id': 'not-ready',
                            'name': 'Not working',
                            'display': 'MusicPlayer Version 2.0 is not yet completed. Version 1 will not receive any more updates and is deprecated',
                            'action': {
                                'type': 'link',
                                'href': 'https://github.com/janishutz/MusicPlayerV2',
                                'display': 'GitHub'
                            }
                        }
                    }
                },
                'bga': {
                    'id': 'bga',
                    'name': 'BiogasControllerApp',
                    'supportOptions': { 
                        'warning': {
                            'id': 'warning',
                            'name': 'Windows app warning',
                            'display': 'As this app is not digitally signed, Windows will warn you about running the app. The app is totally safe, so you can allow it to run. If it does not work, consider downloading the app, installing python with all necessary dependencies (see link below) and running it that way.',
                            'action': {
                                'type': 'link',
                                'href': 'https://github.com/janishutz/BiogasControllerApp/wiki/Install-and-run-the-program#download-dev-versions-if-you-run-into-a-bug-then-this-may-help',
                                'display': 'Python installation'
                            }
                        },
                        'errconn': {
                            'id': 'errconn',
                            'name': 'Connection error',
                            'display': 'Please first follow the steps the app gives you when you press the details button on the error message. If these steps do not work, please head to our wiki where things are explained in a more detailed manner. If these steps also do not help, please contact me using the <a href="/support/contact">contact form</a>!',
                            'action': {
                                'type': 'link',
                                'href': 'https://github.com/janishutz/BiogasControllerApp/wiki/Connect-a-Microcontroller',
                                'display': 'Wiki'
                            }
                        },
                        'contact': {
                            'id': 'contact',
                            'name': 'Problem not in this list',
                            'display': 'Please use the contact form and include as much information as possible',
                            'action': {
                                'type': 'link',
                                'href': '/support/contact',
                                'display': 'Contact me'
                            }
                        }
                    }
                },
                'other': {
                    'id': 'other',
                    'name': 'Other',
                    'supportOptions': { 
                        'contact': {
                            'id': 'contact',
                            'name': 'Contact me',
                            'display': 'Please contact me using the contact form, include the name of the software you have problems with and as much information as possible on the isse.',
                            'action': {
                                'type': 'link',
                                'href': '/support/contact',
                                'display': 'Contact'
                            }
                        }
                    }
                }
            },
            selectedProduct: 'sm',
        };
    },
    methods: {
        closePopup() {
            $( '#popup' ).fadeOut( 500 );
            $( 'body' ).removeClass( 'menuOpen' );
        },
        openPopup ( product ) {
            $( '#popup' ).fadeIn( 500 );
            $( 'body' ).addClass( 'menuOpen' );
            this.selectedProduct = product;
        },
        toggleSupportOption ( option ) {
            for ( let action in this.products[ this.selectedProduct ][ 'supportOptions' ] ) {
                if ( action !== option ) {
                    $( '#' + action + '-container' ).removeClass( 'open' );
                    $( '#' + action ).fadeOut( 100 );
                }
            }
            $( '#' + option + '-container' ).toggleClass( 'open' );
            $( '#' + option ).fadeToggle( 100 );
        }
    },
} ).mount( '#support-app' );
