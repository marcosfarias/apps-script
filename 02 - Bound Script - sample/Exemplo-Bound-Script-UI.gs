function onOpen() {
  //
  var ui = SpreadsheetApp.getUi();
  //
  ui.createMenu('Menu Personalizado')
      .addSubMenu(ui.createMenu('Caixas de Diálogo')
          .addItem('Alerta Simples', 'exibeAlertaSimples')
          .addItem('Alerta de Confirmação', 'exibeAlertaDeConfirmacao')
          .addItem('Prompt', 'exibePrompt'))
      .addSeparator()
      .addSubMenu(ui.createMenu('Painel Lateral')
          .addItem('Exibir', 'exibirPainelLateral'))
      .addToUi();
}

function exibeAlertaSimples() {
  //
  SpreadsheetApp.getUi() //
     .alert('Você clicou para exibir um alerta simples e cá estamos!');
}

function exibeAlertaDeConfirmacao() {
  // 
  var ui = SpreadsheetApp.getUi(); 

  // 
  var result = ui.alert(
     'Confirmação',
     'Tem certeza que deseja continuar?',
      ui.ButtonSet.YES_NO);

  // Processa a resposta do usuário
  if (result == ui.Button.YES) {
    // Usuário clicou "Yes".
    ui.alert('Confirmação recebida.');
  } else {
    // Usuário clicou "No" ou X na barra de título.
    ui.alert('Confirmação negada.');
  }
}

function exibePrompt() {
  // 
  var ui = SpreadsheetApp.getUi(); 

  // 
  var result = ui.prompt(
      'Vamos nos conhecer melhor!',
      'Entre seu nome:',
      ui.ButtonSet.OK_CANCEL);

  // Processe a resposta do usuário:
  var button = result.getSelectedButton();
  var text = result.getResponseText();
  
  // Usuário clicou "OK".
  if (button == ui.Button.OK) {
    ui.alert('Seu nome é ' + text + '. \o/');
  } 
  // Usuário clicou "Cancel".
  else if (button == ui.Button.CANCEL) {
    ui.alert('Eu não peguei seu nome :-|');
  } 
  // Usuário clicou X na barra de título
  else if (button == ui.Button.CLOSE) {
    ui.alert('Você fechou a janela de prompt :-(');
  }
}

function exibeAlertaPersonalizado() {
  var html = HtmlService.createHtmlOutputFromFile('Page')
      .setWidth(400)
      .setHeight(300);
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
      .showModalDialog(html, 'My custom dialog');
}

function exibirPainelLateral() {
  //
  var html = HtmlService.createHtmlOutputFromFile('Exemplo-PainelLateral')
      .setTitle('My custom sidebar')
      .setWidth(300);
  //
  SpreadsheetApp.getUi()
      .showSidebar(html);  
}
