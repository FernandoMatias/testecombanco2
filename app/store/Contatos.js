Ext.define('Touch2Demo.store.Contatos',{
	extend: 'Ext.data.Store',
	config: {
		model: 'Touch2Demo.model.Contato',
		proxy: {
			type: 'ajax',
			api:{
			   //create: './app/php/criaContato.php', //CRUD
			   create: 'http://10.0.2.2/php/criaContato.php', //CRUD
			   read: 'http://10.0.2.2/php/listaContatos.php',
			   update: 'http://10.0.2.2/php/atualizaContato.php',
			   destroy: 'http://10.0.2.2/php/deletaContato.php' 
			},
			
			reader: {
				type: 'xml', //json ou xml
				root: 'contatos',
				record: 'contato'
			},
			
			writer: {
				type: 'xml', //json ou xml
				documentRoot: 'contatos',
				record: 'contato',
				writeAllFields: true,
				encode: true,
				nameProperty: 'mapping'
			}
		},
		autoLoad: true,
		autoSync: true
	}
	
});

