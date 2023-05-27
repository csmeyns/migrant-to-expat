
walk(document.body);

function walk(node)
{
	var child, next;

	var tagName = node.tagName ? node.tagName.toLowerCase() : "";
	if (tagName == 'input' || tagName == 'textarea') {
		return;
	}
	if (node.classList && node.classList.contains('ace_editor')) {
		return;
	}

	switch (node.nodeType)
	{
		case 1: // Element
		case 9: // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

  	v = v.replace(/\ba migrant\b/g, "an expat");
  	v = v.replace(/\ba Migrant\b/g, "an Expat");
	v = v.replace(/\bA migrant\b/g, "An expat");
  	v = v.replace(/\bA Migrant\b/g, "An Expat");
	v = v.replace(/\bmigranten\b/g, "expats");
  	v = v.replace(/\bMigranten\b/g, "Expats");
  	v = v.replace(/\bmigration\b/g, "expatriation");
  	v = v.replace(/\bMigration\b/g, "Expatriation");
  	v = v.replace(/\bmigrate\b/g, "expatriate");
  	v = v.replace(/\bMigrate\b/g, "Expatriate");
  	v = v.replace(/\bMigrants\b/g, "Expats");
  	v = v.replace(/\bmigrants\b/g, "expats");
  	v = v.replace(/\bMigrant\b/g, "Expat");
  	v = v.replace(/\bmigrant\b/g, "expat");
  	v = v.replace(/\bMig·rant\b/g, "Ex·pat");
  	v = v.replace(/\bmig·rant\b/g, "ex·pat");

	textNode.nodeValue = v;
}