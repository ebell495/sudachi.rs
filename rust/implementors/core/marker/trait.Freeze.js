(function() {var implementors = {};
implementors["sudachi"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"sudachi/analysis/struct.Node.html\" title=\"struct sudachi::analysis::Node\">Node</a>","synthetic":true,"types":["sudachi::analysis::inner::Node"]},{"text":"impl Freeze for <a class=\"struct\" href=\"sudachi/analysis/lattice/struct.Lattice.html\" title=\"struct sudachi::analysis::lattice::Lattice\">Lattice</a>","synthetic":true,"types":["sudachi::analysis::lattice::Lattice"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"sudachi/analysis/morpheme/struct.MorphemeList.html\" title=\"struct sudachi::analysis::morpheme::MorphemeList\">MorphemeList</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["sudachi::analysis::morpheme::MorphemeList"]},{"text":"impl&lt;'a, T&gt; Freeze for <a class=\"struct\" href=\"sudachi/analysis/morpheme/struct.MorphemeIter.html\" title=\"struct sudachi::analysis::morpheme::MorphemeIter\">MorphemeIter</a>&lt;'a, T&gt;","synthetic":true,"types":["sudachi::analysis::morpheme::MorphemeIter"]},{"text":"impl&lt;'a, T&gt; Freeze for <a class=\"struct\" href=\"sudachi/analysis/morpheme/struct.Morpheme.html\" title=\"struct sudachi::analysis::morpheme::Morpheme\">Morpheme</a>&lt;'a, T&gt;","synthetic":true,"types":["sudachi::analysis::morpheme::Morpheme"]},{"text":"impl Freeze for <a class=\"struct\" href=\"sudachi/analysis/node/struct.ResultNode.html\" title=\"struct sudachi::analysis::node::ResultNode\">ResultNode</a>","synthetic":true,"types":["sudachi::analysis::node::ResultNode"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"sudachi/analysis/node/struct.NodeSplitIterator.html\" title=\"struct sudachi::analysis::node::NodeSplitIterator\">NodeSplitIterator</a>&lt;'a&gt;","synthetic":true,"types":["sudachi::analysis::node::NodeSplitIterator"]},{"text":"impl&lt;D&gt; Freeze for <a class=\"struct\" href=\"sudachi/analysis/stateful_tokenizer/struct.StatefulTokenizer.html\" title=\"struct sudachi::analysis::stateful_tokenizer::StatefulTokenizer\">StatefulTokenizer</a>&lt;D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Freeze,&nbsp;</span>","synthetic":true,"types":["sudachi::analysis::stateful_tokenizer::StatefulTokenizer"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"sudachi/analysis/stateless_tokenizer/struct.StatelessTokenizer.html\" title=\"struct sudachi::analysis::stateless_tokenizer::StatelessTokenizer\">StatelessTokenizer</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["sudachi::analysis::stateless_tokenizer::StatelessTokenizer"]},{"text":"impl Freeze for <a class=\"enum\" href=\"sudachi/analysis/enum.Mode.html\" title=\"enum sudachi::analysis::Mode\">Mode</a>","synthetic":true,"types":["sudachi::analysis::Mode"]},{"text":"impl Freeze for <a class=\"enum\" href=\"sudachi/config/enum.ConfigError.html\" title=\"enum sudachi::config::ConfigError\">ConfigError</a>","synthetic":true,"types":["sudachi::config::ConfigError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"sudachi/config/struct.Config.html\" title=\"struct sudachi::config::Config\">Config</a>","synthetic":true,"types":["sudachi::config::Config"]},{"text":"impl Freeze for <a class=\"struct\" href=\"sudachi/config/struct.RawConfig.html\" title=\"struct sudachi::config::RawConfig\">RawConfig</a>","synthetic":true,"types":["sudachi::config::RawConfig"]},{"text":"impl Freeze for <a class=\"struct\" href=\"sudachi/dic/build/error/struct.DicBuildError.html\" title=\"struct sudachi::dic::build::error::DicBuildError\">DicBuildError</a>","synthetic":true,"types":["sudachi::dic::build::error::DicBuildError"]},{"text":"impl Freeze for <a class=\"enum\" href=\"sudachi/dic/build/error/enum.BuildFailure.html\" title=\"enum sudachi::dic::build::error::BuildFailure\">BuildFailure</a>","synthetic":true,"types":["sudachi::dic::build::error::BuildFailure"]},{"text":"impl Freeze for <a class=\"struct\" href=\"sudachi/dic/build/report/struct.DictPartReport.html\" title=\"struct sudachi::dic::build::report::DictPartReport\">DictPartReport</a>","synthetic":true,"types":["sudachi::dic::build::report::DictPartReport"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"enum\" href=\"sudachi/dic/build/enum.DataSource.html\" title=\"enum sudachi::dic::build::DataSource\">DataSource</a>&lt;'a&gt;","synthetic":true,"types":["sudachi::dic::build::DataSource"]},{"text":"impl Freeze for <a class=\"enum\" href=\"sudachi/dic/build/enum.NoDic.html\" title=\"enum sudachi::dic::build::NoDic\">NoDic</a>","synthetic":true,"types":["sudachi::dic::build::NoDic"]},{"text":"impl&lt;D&gt; Freeze for <a class=\"struct\" href=\"sudachi/dic/build/struct.DictBuilder.html\" title=\"struct sudachi::dic::build::DictBuilder\">DictBuilder</a>&lt;D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Freeze,&nbsp;</span>","synthetic":true,"types":["sudachi::dic::build::DictBuilder"]},{"text":"impl Freeze for <a class=\"struct\" href=\"sudachi/dic/category_type/struct.CategoryType.html\" title=\"struct sudachi::dic::category_type::CategoryType\">CategoryType</a>","synthetic":true,"types":["sudachi::dic::category_type::CategoryType"]},{"text":"impl Freeze for <a class=\"enum\" href=\"sudachi/dic/character_category/enum.Error.html\" title=\"enum sudachi::dic::character_category::Error\">Error</a>","synthetic":true,"types":["sudachi::dic::character_category::Error"]},{"text":"impl Freeze for <a class=\"struct\" href=\"sudachi/dic/character_category/struct.CharacterCategory.html\" title=\"struct sudachi::dic::character_category::CharacterCategory\">CharacterCategory</a>","synthetic":true,"types":["sudachi::dic::character_category::CharacterCategory"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"sudachi/dic/character_category/struct.CharCategoryIter.html\" title=\"struct sudachi::dic::character_category::CharCategoryIter\">CharCategoryIter</a>&lt;'a&gt;","synthetic":true,"types":["sudachi::dic::character_category::CharCategoryIter"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"sudachi/dic/connect/struct.ConnectionMatrix.html\" title=\"struct sudachi::dic::connect::ConnectionMatrix\">ConnectionMatrix</a>&lt;'a&gt;","synthetic":true,"types":["sudachi::dic::connect::ConnectionMatrix"]},{"text":"impl Freeze for <a class=\"struct\" href=\"sudachi/dic/dictionary/struct.JapaneseDictionary.html\" title=\"struct sudachi::dic::dictionary::JapaneseDictionary\">JapaneseDictionary</a>","synthetic":true,"types":["sudachi::dic::dictionary::JapaneseDictionary"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"sudachi/dic/grammar/struct.Grammar.html\" title=\"struct sudachi::dic::grammar::Grammar\">Grammar</a>&lt;'a&gt;","synthetic":true,"types":["sudachi::dic::grammar::Grammar"]},{"text":"impl Freeze for <a class=\"enum\" href=\"sudachi/dic/header/enum.HeaderError.html\" title=\"enum sudachi::dic::header::HeaderError\">HeaderError</a>","synthetic":true,"types":["sudachi::dic::header::HeaderError"]},{"text":"impl Freeze for <a class=\"enum\" href=\"sudachi/dic/header/enum.HeaderVersion.html\" title=\"enum sudachi::dic::header::HeaderVersion\">HeaderVersion</a>","synthetic":true,"types":["sudachi::dic::header::HeaderVersion"]},{"text":"impl Freeze for <a class=\"enum\" href=\"sudachi/dic/header/enum.SystemDictVersion.html\" title=\"enum sudachi::dic::header::SystemDictVersion\">SystemDictVersion</a>","synthetic":true,"types":["sudachi::dic::header::SystemDictVersion"]},{"text":"impl Freeze for <a class=\"enum\" href=\"sudachi/dic/header/enum.UserDictVersion.html\" title=\"enum sudachi::dic::header::UserDictVersion\">UserDictVersion</a>","synthetic":true,"types":["sudachi::dic::header::UserDictVersion"]},{"text":"impl Freeze for <a class=\"struct\" href=\"sudachi/dic/header/struct.Header.html\" title=\"struct sudachi::dic::header::Header\">Header</a>","synthetic":true,"types":["sudachi::dic::header::Header"]},{"text":"impl Freeze for <a class=\"struct\" href=\"sudachi/dic/lexicon/trie/struct.TrieEntry.html\" title=\"struct sudachi::dic::lexicon::trie::TrieEntry\">TrieEntry</a>","synthetic":true,"types":["sudachi::dic::lexicon::trie::TrieEntry"]},{"text":"impl Freeze for <a class=\"struct\" href=\"sudachi/dic/lexicon/trie/struct.Trie.html\" title=\"struct sudachi::dic::lexicon::trie::Trie\">Trie</a>","synthetic":true,"types":["sudachi::dic::lexicon::trie::Trie"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"sudachi/dic/lexicon/trie/struct.TrieEntryIter.html\" title=\"struct sudachi::dic::lexicon::trie::TrieEntryIter\">TrieEntryIter</a>&lt;'a&gt;","synthetic":true,"types":["sudachi::dic::lexicon::trie::TrieEntryIter"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"sudachi/dic/lexicon/word_id_table/struct.WordIdTable.html\" title=\"struct sudachi::dic::lexicon::word_id_table::WordIdTable\">WordIdTable</a>&lt;'a&gt;","synthetic":true,"types":["sudachi::dic::lexicon::word_id_table::WordIdTable"]},{"text":"impl Freeze for <a class=\"struct\" href=\"sudachi/dic/lexicon/word_id_table/struct.WordIdIter.html\" title=\"struct sudachi::dic::lexicon::word_id_table::WordIdIter\">WordIdIter</a>","synthetic":true,"types":["sudachi::dic::lexicon::word_id_table::WordIdIter"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"sudachi/dic/lexicon/word_infos/struct.WordInfos.html\" title=\"struct sudachi::dic::lexicon::word_infos::WordInfos\">WordInfos</a>&lt;'a&gt;","synthetic":true,"types":["sudachi::dic::lexicon::word_infos::WordInfos"]},{"text":"impl Freeze for <a class=\"struct\" href=\"sudachi/dic/lexicon/word_infos/struct.WordInfo.html\" title=\"struct sudachi::dic::lexicon::word_infos::WordInfo\">WordInfo</a>","synthetic":true,"types":["sudachi::dic::lexicon::word_infos::WordInfo"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"sudachi/dic/lexicon/word_params/struct.WordParams.html\" title=\"struct sudachi::dic::lexicon::word_params::WordParams\">WordParams</a>&lt;'a&gt;","synthetic":true,"types":["sudachi::dic::lexicon::word_params::WordParams"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"sudachi/dic/lexicon/struct.Lexicon.html\" title=\"struct sudachi::dic::lexicon::Lexicon\">Lexicon</a>&lt;'a&gt;","synthetic":true,"types":["sudachi::dic::lexicon::Lexicon"]},{"text":"impl Freeze for <a class=\"struct\" href=\"sudachi/dic/lexicon/struct.LexiconEntry.html\" title=\"struct sudachi::dic::lexicon::LexiconEntry\">LexiconEntry</a>","synthetic":true,"types":["sudachi::dic::lexicon::LexiconEntry"]},{"text":"impl Freeze for <a class=\"enum\" href=\"sudachi/dic/lexicon_set/enum.LexiconSetError.html\" title=\"enum sudachi::dic::lexicon_set::LexiconSetError\">LexiconSetError</a>","synthetic":true,"types":["sudachi::dic::lexicon_set::LexiconSetError"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"sudachi/dic/lexicon_set/struct.LexiconSet.html\" title=\"struct sudachi::dic::lexicon_set::LexiconSet\">LexiconSet</a>&lt;'a&gt;","synthetic":true,"types":["sudachi::dic::lexicon_set::LexiconSet"]},{"text":"impl Freeze for <a class=\"struct\" href=\"sudachi/dic/word_id/struct.WordId.html\" title=\"struct sudachi::dic::word_id::WordId\">WordId</a>","synthetic":true,"types":["sudachi::dic::word_id::WordId"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"sudachi/dic/struct.LoadedDictionary.html\" title=\"struct sudachi::dic::LoadedDictionary\">LoadedDictionary</a>&lt;'a&gt;","synthetic":true,"types":["sudachi::dic::LoadedDictionary"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"sudachi/dic/struct.DictionaryLoader.html\" title=\"struct sudachi::dic::DictionaryLoader\">DictionaryLoader</a>&lt;'a&gt;","synthetic":true,"types":["sudachi::dic::DictionaryLoader"]},{"text":"impl Freeze for <a class=\"enum\" href=\"sudachi/error/enum.SudachiError.html\" title=\"enum sudachi::error::SudachiError\">SudachiError</a>","synthetic":true,"types":["sudachi::error::SudachiError"]},{"text":"impl&lt;I&gt; Freeze for <a class=\"enum\" href=\"sudachi/error/enum.SudachiNomError.html\" title=\"enum sudachi::error::SudachiNomError\">SudachiNomError</a>&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Freeze,&nbsp;</span>","synthetic":true,"types":["sudachi::error::SudachiNomError"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"sudachi/input_text/struct.InputEditor.html\" title=\"struct sudachi::input_text::InputEditor\">InputEditor</a>&lt;'a&gt;","synthetic":true,"types":["sudachi::input_text::buffer::edit::InputEditor"]},{"text":"impl Freeze for <a class=\"struct\" href=\"sudachi/input_text/struct.InputBuffer.html\" title=\"struct sudachi::input_text::InputBuffer\">InputBuffer</a>","synthetic":true,"types":["sudachi::input_text::buffer::InputBuffer"]},{"text":"impl Freeze for <a class=\"struct\" href=\"sudachi/plugin/input_text/default_input_text/struct.DefaultInputTextPlugin.html\" title=\"struct sudachi::plugin::input_text::default_input_text::DefaultInputTextPlugin\">DefaultInputTextPlugin</a>","synthetic":true,"types":["sudachi::plugin::input_text::default_input_text::DefaultInputTextPlugin"]},{"text":"impl Freeze for <a class=\"struct\" href=\"sudachi/plugin/oov/mecab_oov/struct.MeCabOovPlugin.html\" title=\"struct sudachi::plugin::oov::mecab_oov::MeCabOovPlugin\">MeCabOovPlugin</a>","synthetic":true,"types":["sudachi::plugin::oov::mecab_oov::MeCabOovPlugin"]},{"text":"impl Freeze for <a class=\"struct\" href=\"sudachi/plugin/oov/simple_oov/struct.SimpleOovPlugin.html\" title=\"struct sudachi::plugin::oov::simple_oov::SimpleOovPlugin\">SimpleOovPlugin</a>","synthetic":true,"types":["sudachi::plugin::oov::simple_oov::SimpleOovPlugin"]},{"text":"impl Freeze for <a class=\"struct\" href=\"sudachi/plugin/path_rewrite/join_katakana_oov/struct.JoinKatakanaOovPlugin.html\" title=\"struct sudachi::plugin::path_rewrite::join_katakana_oov::JoinKatakanaOovPlugin\">JoinKatakanaOovPlugin</a>","synthetic":true,"types":["sudachi::plugin::path_rewrite::join_katakana_oov::JoinKatakanaOovPlugin"]},{"text":"impl Freeze for <a class=\"struct\" href=\"sudachi/plugin/path_rewrite/join_numeric/struct.JoinNumericPlugin.html\" title=\"struct sudachi::plugin::path_rewrite::join_numeric::JoinNumericPlugin\">JoinNumericPlugin</a>","synthetic":true,"types":["sudachi::plugin::path_rewrite::join_numeric::JoinNumericPlugin"]},{"text":"impl Freeze for <a class=\"enum\" href=\"sudachi/plugin/enum.PluginError.html\" title=\"enum sudachi::plugin::PluginError\">PluginError</a>","synthetic":true,"types":["sudachi::plugin::PluginError"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"sudachi/sentence_detector/struct.NonBreakChecker.html\" title=\"struct sudachi::sentence_detector::NonBreakChecker\">NonBreakChecker</a>&lt;'a&gt;","synthetic":true,"types":["sudachi::sentence_detector::NonBreakChecker"]},{"text":"impl Freeze for <a class=\"struct\" href=\"sudachi/sentence_detector/struct.SentenceDetector.html\" title=\"struct sudachi::sentence_detector::SentenceDetector\">SentenceDetector</a>","synthetic":true,"types":["sudachi::sentence_detector::SentenceDetector"]},{"text":"impl&lt;'s, 'x&gt; Freeze for <a class=\"struct\" href=\"sudachi/sentence_splitter/struct.SentenceIter.html\" title=\"struct sudachi::sentence_splitter::SentenceIter\">SentenceIter</a>&lt;'s, 'x&gt;","synthetic":true,"types":["sudachi::sentence_splitter::SentenceIter"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"sudachi/sentence_splitter/struct.SentenceSplitter.html\" title=\"struct sudachi::sentence_splitter::SentenceSplitter\">SentenceSplitter</a>&lt;'a&gt;","synthetic":true,"types":["sudachi::sentence_splitter::SentenceSplitter"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()