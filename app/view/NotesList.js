Ext.define("NotesApp.view.NotesList", {
    extend: "Ext.Container",
    requires:"Ext.dataview.List",
    alias: "widget.noteslistview",

    config: {
        layout: {
            type: 'fit'
        },
        items: [{
            xtype: "toolbar",
            title: "My Notes",
            docked: "top",
            items: [
                { xtype: 'spacer' },
                {
                    xtype: "button",
                    text: 'New',
                    ui: 'action',
                    itemId: "newButton"
                }
            ]
        }, {
            xtype: "list",
            store: "Notes",
            itemId:"notesList",
            loadingText: "Loading Notes...",
            emptyText: '<div class="notes-list-empty-text">No notes found.</div>',
            onItemDisclosure: true,
            grouped: true,
            itemTpl: '<div class="list-item-title">{title}</div><div class="list-item-narrative">{narrative}</div>'
        }]
    }
});